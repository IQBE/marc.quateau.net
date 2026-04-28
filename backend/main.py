import os
import httpx
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from fastapi_mail import FastMail, ConnectionConfig, MessageSchema, MessageType

class EmailSchema(BaseModel):
    name: str
    email: str
    message: str
    cloudflare_turnstile_token: str

load_dotenv()
app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://marc.quateau.net"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

conf = ConnectionConfig(
    MAIL_USERNAME = os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD"),
    MAIL_FROM = os.getenv("MAIL_FROM"),
    MAIL_PORT = os.getenv("MAIL_PORT"),
    MAIL_SERVER = os.getenv("MAIL_SERVER"),
    MAIL_STARTTLS = True,
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

@app.get("/")
def hello():
    return {"message": "Hello World"}

@app.post("/contact-email")
async def send_contact_email(email: EmailSchema, request: Request) -> JSONResponse:
    async with httpx.AsyncClient() as client:
        response = await client.post(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            headers={
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data={
                "secret": os.getenv("CLOUDFLARE_TURNSTILE_SECRET"),
                "response": email.cloudflare_turnstile_token,
                "remoteip": request.client.host,
            }
        )

    result = response.json()

    if not result.get("success"):
        return JSONResponse(status_code=400, content={"message": "Turnstile validation failed!"})

    fm = FastMail(conf)
    await fm.send_message(generate_email(email))
    return JSONResponse(status_code=200, content={"message": "Email sent!"})

def generate_email(email: EmailSchema) -> MessageSchema:
    return MessageSchema(
        subject=f"Nieuw bericht via de website! - {email.name}",
        recipients=[os.getenv("MAIL_TO")],
        body=f"Er is een nieuw bericht ontvangen via de website\n\nNaam: {email.name}\nEmail: {email.email}\n\nBericht:\n{email.message}",
        subtype=MessageType.plain
    )
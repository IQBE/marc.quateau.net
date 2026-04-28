import "@styles/contact.scss";
import { useState } from "react";
import Turnstile from "react-turnstile";

enum Loading {
  None,
  Loading,
  Success,
  Error,
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(Loading.None);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setStatus(Loading.Loading);
    e.preventDefault();

    fetch("http://localhost:8000/contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        cloudflare_turnstile_token: token,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Je bericht is verzonden.");
          setStatus(Loading.Success);
        } else {
          console.error(
            "Er is iets mis gegaan op onze server. Response status: " +
              response.status,
          );
          setStatus(Loading.Error);
        }
      })
      .catch((error) => {
        console.log(
          "Er is iets mis gegaan tijdens het verzenden van je bericht.",
        );
        console.error(error);
        setStatus(Loading.Error);
      });
  };

  return (
    <div className="contact">
      <div className="left">
        <h1>Contacteer Marc</h1>
        <p>
          Heb je vragen? Wil je op de hoogte blijven van komende
          tentoonstellingen?
          <br />
          Contacteer Marc via het onderstaande formulier.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Naam"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-input"
            style={{ width: "33%" }}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-input"
          />
          <textarea
            placeholder="Bericht"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="text-input"
          ></textarea>

          <Turnstile
            sitekey="0x4AAAAAADEfwxNDSAyIclyK"
            onVerify={(token) => setToken(token)}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <input type="submit" value="Verstuur" className="submit" />
            {status === Loading.Loading && (
              <span className="status">◌ Aan het laden...</span>
            )}
            {status === Loading.Success && (
              <span className="status success">✓ Bericht verzonden!</span>
            )}
            {status === Loading.Error && (
              <span className="status error">
                ✗ Er is iets misgegaan. Probeer het later opnieuw.
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="right">
        <img src="/images/profile.jpg" alt="Contact image" />
      </div>
    </div>
  );
}


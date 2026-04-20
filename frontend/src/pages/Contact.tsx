import "@styles/contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <h1>Contacteer Marc</h1>
        <p>
          Heb je vragen? Wil je op de hoogte blijven van komende
          tentoonstellingen?
          <br />
          Contacteer Marc via het onderstaande formulier, of rechtstreeks via
          mail of telefoon.
        </p>
        <form>
          <input type="text" placeholder="Naam" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Bericht"></textarea>
          <button type="submit">Verzenden</button>
        </form>
      </div>
      <div className="right">
        <img src="/images/profile.jpg" alt="Contact image" />
      </div>
    </div>
  );
}


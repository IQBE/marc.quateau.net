import HighlightedItem from "../components/HighlightedItem";
import AccentedBar from "../components/AccentedBar";
import ButtonWithArrows from "../components/ButtonWithArrows";
import "@styles/home.scss";

const Home = () => {
  return (
    <>
      <div className="greeting">
        <div className="greetingLogo">
          <img src="/images/logo.png" alt="Logo Marc Quateau" />
        </div>
        <div className="greetingText">
          <h1>Marc Quateau</h1>
          <p>KUNSTSCHILDER & BEELDHOUWER</p>
        </div>
      </div>
      <HighlightedItem>
        <img
          src="/images/collections/play-pauze-repeat/pieta.jpg"
          alt="Piëta afbeelding"
        />
        <div>
          <h2>Piëta</h2>
          <p>
            Keramiek <br />
            32 x 14 x 19 cm <br />
            12 x 9 x 30 cm
          </p>
        </div>
      </HighlightedItem>
      <AccentedBar>
        <h2>Play - Pauze - Repeat</h2>
        <h3>
          Waar men gaat langs Vlaamse wegen <br />
          Komt men flessen tegen
        </h3>
        <p>
          Glazen flessen in alle kleuren, maten en vormen. Glas dat geruimd moet
          worden voordat het een brand aansteekt of iemand er zich aan snijdt.
          Afgevoerd naar een recyclagefabriek om nieuwe flessen te maken. De
          flessen hebben uiterlijke kenmerken die hun herkomst verbeelden. Dit
          is een circulair systeem dat nooit stopt. Hoogstens op pauze wordt
          gezet. <br />
          <br />
          Niet enkel Vlaanderen maar de hele wereld is bezaaid. <br />
          <br />
          Tijdens een bezoek aan het “In Flanders Fields Museum” in Ieper viel
          me de gelijkenis op tussen de obussen en flessen. Ik liet me vormelijk
          leiden door de ontplofte obussen, de collectie gegraveerde obussen en
          door “Het treurende ouderpaar” van Käthe Kollwitz.
        </p>
        <ButtonWithArrows
          text="Ontdek Marc zijn werken in zijn Portfolio"
          to="/portfolio"
          type="secondary"
          className="portfolioButton"
        />
      </AccentedBar>
      <HighlightedItem>
        <img
          src="/images/collections/play-pauze-repeat/ppr-painting.jpg"
          alt="Play Pauze Repeat schilderij"
        />
        <div>
          <h2>Play-Pauze-Repeat</h2>
          <p>
            Olieverf op doek <br />
            40 x 30 cm
          </p>
        </div>
      </HighlightedItem>
    </>
  );
};

export default Home;


import HighlightedItem from "../components/HighlightedItem";
import "@styles/tentoonstellingen.scss";

const Tentoonstellingen = () => {
  const handleImageClick = (link: string) => {
    window.open(link);
  };

  return (
    <div className="tentoonstellingen">
      <HighlightedItem>
        <img
          src="/images/tentoonstellingen/kunstoevers2024.jpg"
          alt="Kunstoevers 2024"
        />
        <div className="info">
          <h2
            className="clickable"
            onClick={() => handleImageClick("https://aalst.be/kunstoevers")}
          >
            Kunstoevers 2024
          </h2>
          <p>
            Kunstoevers is het jaarlijkse kunstenfestival langs de oevers van de
            Dender in Aalst. Tientallen beeldende kunstenaars tonen tijdens het
            evenement hun werken, maar ook verschillende Aalsterse artiesten
            brengen performances, muziekoptredens, theater, film, modeshows en
            andere vormen van podiumkunst.
          </p>
          <h4>
            Zaterdag 18 tot maandag 20 mei 2024
            <br />
            Van 13 tot 18 uur
            <br />
            <br />
            Vakschoolstraat 41, 9300 Aalst
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.069049924571!2d4.025502176909097!3d50.94093605192673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3bd55cf17ebc5%3A0x47b12b71dea0f28e!2sVakschoolstraat%2041%2C%209300%20Aalst!5e0!3m2!1sen!2sbe!4v1749051966548!5m2!1sen!2sbe"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </HighlightedItem>
      <HighlightedItem>
        <img
          src="/images/tentoonstellingen/kunstoevers2023.jpg"
          alt="Kunstoevers 2023"
        />
        <div className="info">
          <h2
            className="clickable"
            onClick={() => handleImageClick("https://aalst.be/kunstoevers")}
          >
            Kunstoevers 2023
          </h2>
          <p>
            Kunstoevers is het jaarlijkse kunstenfestival langs de oevers van de
            Dender in Aalst. Tientallen beeldende kunstenaars tonen tijdens het
            evenement hun werken, maar ook verschillende Aalsterse artiesten
            brengen performances, muziekoptredens, theater, film, modeshows en
            andere vormen van podiumkunst.
          </p>
          <h4>
            Donderdag 18 tot zondag 21 mei 2023
            <br />
            Van 13 tot 19 uur
            <br />
            <br />
            Vaartstraat 8, 9300 Aalst
          </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.061690757304!2d4.038299076909063!3d50.94107215191678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3bd58cea63019%3A0x4c7f4646ea7eefb!2sVaartstraat%208%2C%209300%20Aalst!5e0!3m2!1sen!2sbe!4v1749053374908!5m2!1sen!2sbe"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </HighlightedItem>
    </div>
  );
};

export default Tentoonstellingen;


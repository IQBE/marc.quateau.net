import HighlightedItem from "../components/HighlightedItem";
import AccentedBar from "../components/AccentedBar";
import "@styles/biografie.scss";

const Biografie = () => {
  return (
    <>
      <HighlightedItem>
        <img src="/images/profile.jpg" alt="Mar Quateau profiel" />
        <div>
          <h1>Marc Quateau</h1>
          <h3>
            °1970, Ukkel (België)
            <br />
            Leeft en werkt in Nieuwerkerken - Aalst (België)
            <br />
            <br />
            Studeert aan de
            <a href="https://academiebeeldendekunsten.aalst.be/">
              Stedelijke Academie voor Beeldende Kunsten Aalst
            </a>
          </h3>
        </div>
      </HighlightedItem>
      <AccentedBar columns={2}>
        <p>
          Marc kijkt, luistert, ruikt, proeft en voelt aan de beelden die zijn
          pad kruisen. De gevoelens die ze oproepen geeft hij opnieuw vorm naar
          de natuur, niet gehinderd door hun objectieve voorkomen. Zijn emoties
          laat hij sturen door kennis; via analyse van het beeld, maar ook via
          een queeste naar het achterliggende verhaal en de context waarin hij
          het originele beeld aantrof.
        </p>
        <p>
          De beelden die Marc veegt en kneed zijn een freeze frame in een lange
          sequentie van beelden. Je ziet dikwijls de aanzet van het beeld, de
          sporen van het traject en vaak ook nog de klodders materie, klaar om
          vorm te krijgen.
          <br />
          <br />
          Om de toeschouwer te begeleiden wil Marc zijn werk duiden met een paar
          kernwoorden. Maar vraag hem niet om het totale beeld te verwoorden.
        </p>
      </AccentedBar>
    </>
  );
};

export default Biografie;


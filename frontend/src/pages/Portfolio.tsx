import Collection from "../components/Collection";
import "@styles/portfolio.scss";

const collections: Collection[] = [
  {
    title: "Play - Pauze - Repeat",
    subtitle: ["Waar men gaat langs Vlaamse wegen", "Komt men flessen tegen"],
    description: [
      "Glazen flessen in alle kleuren, maten en vormen. Glas dat geruimd moet worden voordat het een brand aansteekt of iemand er zich aan snijdt. Afgevoerd naar een recyclagefabriek om nieuwe flessen te maken. De flessen hebben uiterlijke kenmerken die hun herkomst verbeelden. Dit is een circulair systeem dat nooit stopt. Hoogstens op pauze wordt gezet.",
      "Niet enkel Vlaanderen maar de hele wereld is bezaaid.",
      'Tijdens een bezoek aan het "In Flanders Fields Museum" in Ieper viel me de gelijkenis op tussen de obussen en flessen. Ik liet me vormelijk leiden door de ontplofte obussen, de collectie gegraveerde obussen en door "Het treurende ouderpaar" van Käthe Kollwitz.',
    ],
    works: [
      {
        title: "Play - Pauze - Repeat",
        image: "/images/collections/play-pauze-repeat/ppr1.jpg",
        material: "Glas",
        sizes: ["7.5 x 7.5 x 28 cm", "5.5 x 5.5 x 19.5 cm", "8 x 8 x 32 cm"],
      },
      {
        title: "Play - Pauze - Repeat",
        image: "/images/collections/play-pauze-repeat/ppr2.jpg",
        material: "Glas",
        sizes: ["8.5 x 8.5 x 30 cm", "7 x 7 x 17.5 cm", "8 x 8 x 41 cm"],
      },
      {
        title: "Piëta",
        image: "/images/collections/play-pauze-repeat/pieta.jpg",
        material: "Keramiek",
        sizes: ["32 x 14 x 19 cm", "12 x 9 x 30 cm"],
      },
      {
        title: "Play - Pauze - Repeat",
        image: "/images/collections/play-pauze-repeat/ppr-painting.jpg",
        material: "Olieverf op doek",
        sizes: ["40 x 30 cm"],
      },
      {
        title: "Herstal (Des Armes Belge)",
        image: "/images/collections/play-pauze-repeat/herstal.jpg",
        material: "Glas",
        sizes: ["8.5 x 8.5 x 20 cm"],
      },
    ],
  },
  {
    title: "Beslissen",
    works: [
      {
        image: "/images/collections/beslissen/beslissen1.jpg",
        title: "Beslissen, 2023",
        material: "Acrylic one, hout, metaal, verf",
        sizes: ["22 x 25 x 34 cm"],
      },
      {
        image: "/images/collections/beslissen/schilderij-beslissen.jpg",
        title: "Beslissen, 2023",
        material: "Olieverf op doek",
        sizes: ["30 x 40 cm"],
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Marc Quateau</h1>
      {collections.map((collection) => (
        <Collection key={collection.title} {...collection} />
      ))}
    </div>
  );
}


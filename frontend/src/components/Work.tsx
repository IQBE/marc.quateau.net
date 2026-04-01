import styles from "./Work.module.scss";

type Work = {
  title: string;
  image: string;
  material: string;
  sizes: string[];
};

const Work = (work: Work) => {
  return (
    <div className={styles.work}>
      <div className={styles.imageContainer}>
        <img src={work.image} alt={work.title} />
      </div>
      <h2>{work.title}</h2>
      <p>{work.material}</p>
      <div className={styles.sizes}>
        {work.sizes.map((size) => (
          <p key={size}>{size}</p>
        ))}
      </div>
    </div>
  );
};

export default Work;


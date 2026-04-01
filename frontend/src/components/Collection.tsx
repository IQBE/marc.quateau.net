import Work from "./Work";
import styles from "./Collection.module.scss";

type Collection = {
  title: string;
  subtitle?: string[];
  description?: string[];
  works: Work[];
};

const Collection = (collection: Collection) => {
  return (
    <div className={styles.collection}>
      <h2 className={styles.title}>{collection.title}</h2>
      {collection.subtitle?.map((line, index) => (
        <h3 key={index} className={styles.subtitle}>
          {line}
        </h3>
      ))}
      {collection.description?.map((line, index) => (
        <p key={index} className={styles.description}>
          {line}
        </p>
      ))}
      <div className={styles.works}>
        {collection.works.map((work) => (
          <Work key={work.title} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Collection;


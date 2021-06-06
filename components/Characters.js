import Image from "next/image";
import styles from "../styles/Home.module.css";

const Charachters = props => {
  const { characters } = props;

  return (
    <section className={styles.charachters}>
      {!characters?.length && "No charachter found"}
      {characters.map(character => (
        <article key={`${character.id}`} className={styles.character}>
          <div className={styles.character__imgWrapper}>
            <Image
              src={character.image}
              alt={character.name}
              width={220}
              height={220}
            />
          </div>
          <div className={styles.character__content}>
            <section className={styles.character__contentSection}>
              <h2 className={styles.character__contentName}>
                {character.name}
              </h2>
            </section>

            <section className={styles.character__contentSection}>
              <span className="text-gray">Last known location:</span>
              <span>{character.location.name}</span>
            </section>

            <section className={styles.character__contentSection}>
              <span className="text-gray">First seen in:</span>
              <span>{character.origin.name}</span>
            </section>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Charachters;

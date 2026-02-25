import { Link } from "react-router-dom";
import styles from "../../styles/card.module.scss";

function Card({ id, title, imageUrl }) {
  return (
    <article className={styles.card}>
      <Link to={`/annonce/${id}`} className={styles.card__link}>
        <img
          className={styles.card__image}
          src={imageUrl}
          alt={`Image d'une location ${title}`}
        />
        <h3 className={styles.card__title}>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;

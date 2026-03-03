import { Link } from "react-router-dom";
import styles from "../../styles/card.module.scss";
import PropTypes from "prop-types";

/**
 * Composant Card
 *
 * Représente une carte cliquable affichant un logement.
 * La carte contient une image et un titre,
 * et redirige vers la page de détail correspondante à l'annonce.
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - Identifiant unique du logement (utilisé dans l’URL)
 * @param {string} props.title - Titre du logement
 * @param {string} props.imageUrl - URL de l’image du logement
 *
 * @returns {JSX.Element} Carte cliquable vers la page annonce
 */

function Card({ id, title, imageUrl }) {
  return (
    <article className={styles.card}>
      <Link to={`/annonce/${id}`} className={styles.card__link}>
        <img
          className={styles.card__image}
          src={imageUrl}
          alt={`photo d'une location ${title}`}
        />
        <h3 className={styles.card__title}>{title}</h3>
      </Link>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;

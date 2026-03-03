import PropTypes from "prop-types";
import styles from "../../styles/personne.module.scss";
/**
 * Composant Personne
 *
 * Affiche les informations d’un hôte (nom + avatar).
 * Le nom est automatiquement séparé en prénom et nom
 * afin d’afficher le texte sur deux lignes.
 *
 * Structure :
 * - <figure> pour encapsuler l’image et le nom
 * - <img> pour l’avatar
 * - <figcaption> pour le nom
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} [props.name=""] - Nom complet de la personne (format "Prénom Nom")
 * @param {string} [props.avatar=""] - URL de l’image de profil
 *
 * @returns {JSX.Element} Élément figure contenant l’avatar et le nom formaté
 */

function Personne({ name = "", avatar = "" }) {
  const [firstName, lastName] = name.split(" ");

  return (
    <figure className={styles.personne}>
      <img
        className={styles.personne__avatar}
        src={avatar}
        alt={`Photo de profil de ${name}`}
      />
      <figcaption className={styles.personne__name}>
        {firstName}
        <br /> {lastName}
      </figcaption>
    </figure>
  );
}

// Props type definition
Personne.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default Personne;

import PropTypes from "prop-types";
import styles from "../../styles/tag.module.scss";
/**
 * Composant Tag
 *
 * Ce composant est utilisé pour afficher les catégories
 * ou caractéristiques d’une annonce.
 *
 * Structure :
 * - Rend un élément <li>
 * - Stylisé via CSS Modules
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.TagName - Texte du tag à afficher
 *
 * @returns {JSX.Element} Élément <li> stylisé représentant un tag
 */
function Tag({ TagName }) {
  return <li className={styles.tag}>{TagName}</li>;
}

Tag.propTypes = {
  TagName: PropTypes.string.isRequired,
};

export default Tag;

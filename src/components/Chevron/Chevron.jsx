import PropTypes from "prop-types";
import styles from "../../styles/chevron.module.scss";

/**
 * Composant Chevron
 *
 * Icône SVG réutilisable représentant une flèche orientable.
 * Permet de définir :
 * - la direction (left, right, up, down)
 * - la couleur du trait
 * - des classes supplémentaires (gestion contextuelle de la taille)
 *
 * La rotation est gérée via des classes CSS BEM
 * pour séparer la logique React du style.
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {"left"|"right"|"up"|"down"} [props.direction="right"] - Direction de la flèche
 * @param {string} [props.color="currentColor"] - Couleur du stroke SVG
 * @param {string} [props.className=""] - Classe CSS additionnelle (ex: taille contextuelle)
 *
 * @returns {JSX.Element} Icône Chevron SVG
 */

function Chevron({
  direction = "right",
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.chevron} ${styles[`chevron--${direction}`]} ${className}`}
    >
      <path d="M6.158 3.135l3.75 4-3.75 4" />
    </svg>
  );
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Chevron;

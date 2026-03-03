import PropTypes from "prop-types";
import styles from "../../styles/rating.module.scss";

/**
 * Composant Rating
 *
 * Affiche une notation visuelle sous forme d’étoiles.
 * Le nombre d’étoiles remplies dépend de la valeur passée en prop.
 *
 * Fonctionnement :
 * - Génère un tableau de longueur "max" 5 étoiles par défaut
 * - Compare chaque index avec la valeur de rating
 * - Applique une classe différente selon que l’étoile est remplie ou non
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {number|string} props.rating - Valeur de la note (ex: 3 ou "4")
 * @param {number} [props.max=5] - Nombre maximum d’étoiles à afficher
 *
 * @returns {JSX.Element[]} Liste d’étoiles stylisées
 */

function Rating({ rating, max = 5 }) {
  const value = Number(rating) || 0;

  return (
    <>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < value;

        return (
          <div key={i} className={styles.star}>
            <span className={filled ? styles.star__filled : styles.star__empty}>
              ★
            </span>
          </div>
        );
      })}
    </>
  );
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  max: PropTypes.number,
};

export default Rating;

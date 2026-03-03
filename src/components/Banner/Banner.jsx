import styles from "../../styles/banner.module.scss";
import PropTypes from "prop-types";

/**
 * Composant Banner
 *
 * Affiche une bannière avec une image de fond et un overlay en dégradé.
 * Permet d'afficher un titre centré au-dessus de l'image.
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.image - URL de l'image de fond
 * @param {string} props.title - Texte affiché dans la bannière
 * @param {string} [props.overlayColor="0,0,0"] - Couleur RGB de l’overlay (ex: "255,0,0")
 * @param {number} [props.overlayOpacity=0.6] - Opacité de l’overlay (entre 0 et 1)
 *
 * @returns {JSX.Element} Bannière avec image et overlay
 */
function Banner({
  image,
  title,
  overlayColor = "0,0,0", // Default to black
  overlayOpacity = 0.6,
}) {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(${overlayColor}, ${overlayOpacity}),
            rgba(${overlayColor}, ${overlayOpacity})
          ),
          url(${image})
        `,
      }}
    >
      <h1 className={styles.banner__slogan}>{title}</h1>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
};

export default Banner;

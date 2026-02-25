import styles from "../../styles/banner.module.scss";
import PropTypes from "prop-types";

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

import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/carrousel.module.scss";
import Chevron from "../Chevron/Chevron";

function Carrousel({ slides, title = "Logement" }) {
  const [current, setCurrent] = useState(0);
  const Nbpictures = slides?.length ?? 0;

  function nextSlide() {
    setCurrent(function (c) {
      return c === Nbpictures - 1 ? 0 : c + 1;
    });
  }

  function previousSlide() {
    setCurrent(function (c) {
      return c === 0 ? Nbpictures - 1 : c - 1;
    });
  }

  if (!slides || Nbpictures === 0) return null;

  return (
    <section className={styles.carrousel} aria-label={`Carrousel - ${title}`}>
      {Nbpictures > 1 && (
        <button
          type="button"
          className={styles.carrousel_arrowleft}
          onClick={previousSlide}
          aria-label="Image précédente"
        >
          <Chevron direction="left" color="white" size={96} />
        </button>
      )}

      {Nbpictures > 1 && (
        <button
          type="button"
          className={styles.carrousel_arrowright}
          onClick={nextSlide}
          aria-label="Image suivante"
        >
          <Chevron direction="right" color="white" size={96} />
        </button>
      )}

      <img
        className={styles.image}
        src={slides[current]}
        alt={`Image ${current + 1} sur ${Nbpictures} - ${title}`}
      />

      {Nbpictures > 1 && (
        <span className={styles.carrousel__counter}>
          {current + 1}/{Nbpictures}
        </span>
      )}
    </section>
  );
}

Carrousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

export default Carrousel;

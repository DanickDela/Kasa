import PropTypes from "prop-types";
import styles from "../../styles/rating.module.scss";

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

import PropTypes from "prop-types";
import styles from "../../styles/personne.module.scss";

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

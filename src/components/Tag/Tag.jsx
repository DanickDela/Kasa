import PropTypes from "prop-types";
import styles from "../../styles/tag.module.scss";

function Tag({ TagName }) {
  return <li className={styles.tag}>{TagName}</li>;
}

Tag.propTypes = {
  TagName: PropTypes.string.isRequired,
};

export default Tag;

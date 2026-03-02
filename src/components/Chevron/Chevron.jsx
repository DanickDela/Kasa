import PropTypes from "prop-types";
import styles from "../../styles/chevron.module.scss";

export default function Chevron({
  direction = "right",
  color = "currentColor",
}) {
  const rotations = {
    right: "0deg",
    left: "180deg",
    up: "-90deg",
    down: "90deg",
  };

  return (
    <svg
      className={styles.chevron}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: `rotate(${rotations[direction]})`,
        transition: "transform 0.3s ease",
      }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]),
  color: PropTypes.string,
  size: PropTypes.number,
};

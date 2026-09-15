import PropTypes from "prop-types";

const CareerTickIcon = ({ className }) => {
  const strokeColor = className === "tick_icon_green" ? "#0FA958" : "#FF8413";

  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5 17.5001C27.5 22.5001 23.73 27.2081 18.44 28.2601C15.86 28.7739 13.1836 28.4606 10.792 27.3649C8.4004 26.2691 6.41545 24.4468 5.1198 22.1573C3.82414 19.8678 3.28384 17.2279 3.57583 14.6134C3.86781 11.999 4.97719 9.54334 6.74601 7.59609C10.374 3.60009 16.5 2.50009 21.5 4.50009"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 15.5L16.5 20.5L28.5 7.5"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

CareerTickIcon.propTypes = {
  className: PropTypes.string,
};

export default CareerTickIcon;

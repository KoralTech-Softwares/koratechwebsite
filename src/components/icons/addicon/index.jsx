import PropTypes from "prop-types";

const AddIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6C16.5523 6 17 6.44772 17 7V25C17 25.5523 16.5523 26 16 26C15.4477 26 15 25.5523 15 25V7C15 6.44772 15.4477 6 16 6Z"
        fill="#21272A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16C6 15.4477 6.44772 15 7 15H25C25.5523 15 26 15.4477 26 16C26 16.5523 25.5523 17 25 17H7C6.44772 17 6 16.5523 6 16Z"
        fill="#21272A"
      />
    </svg>
  );
};

AddIcon.propTypes = {
  className: PropTypes.string,
};

export default AddIcon;

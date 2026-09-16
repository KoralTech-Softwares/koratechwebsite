const WsHealth = ({ className }) => {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="27"
        cy="27"
        r="25"
        stroke="url(#paint0_linear_843_1909)"
        strokeWidth="3"
      />
      <rect
        x="23.833"
        y="15.5"
        width="6.33333"
        height="23"
        rx="1"
        fill="white"
        stroke="url(#paint1_linear_843_1909)"
        strokeWidth="2"
      />
      <rect
        x="15.5"
        y="30.1666"
        width="6.33333"
        height="23"
        rx="1"
        transform="rotate(-90 15.5 30.1666)"
        fill="white"
        stroke="url(#paint2_linear_843_1909)"
        strokeWidth="2"
      />
      <rect
        x="22.833"
        y="22.8334"
        width="8.33333"
        height="8.33333"
        rx="3"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_843_1909"
          x1="27"
          y1="2"
          x2="27"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#219E4A" />
          <stop offset="1" stopColor="#0974B0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_843_1909"
          x1="26.9997"
          y1="14.5"
          x2="26.9997"
          y2="39.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#219E4A" />
          <stop offset="1" stopColor="#0974B0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_843_1909"
          x1="18.6667"
          y1="31.1666"
          x2="18.6667"
          y2="56.1666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#219E4A" />
          <stop offset="1" stopColor="#0974B0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WsHealth;

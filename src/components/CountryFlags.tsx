import React from "react";

export function FlagUSA({ className = "w-8 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-md shadow-sm overflow-hidden inline-block shrink-0 ${className}`}
      aria-label="Flag of United States"
    >
      <g fillRule="evenodd">
        {/* 13 Stripes */}
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640" />
        {/* Blue Canton */}
        <path fill="#192f5d" d="M0 0h260v259H0z" />
        {/* Canton Stars Grid Simulation */}
        <g fill="#fff">
          {[
            [30, 25], [75, 25], [120, 25], [165, 25], [210, 25],
            [52, 50], [97, 50], [142, 50], [187, 50], [232, 50],
            [30, 75], [75, 75], [120, 75], [165, 75], [210, 75],
            [52, 100], [97, 100], [142, 100], [187, 100], [232, 100],
            [30, 125], [75, 125], [120, 125], [165, 125], [210, 125],
            [52, 150], [97, 150], [142, 150], [187, 150], [232, 150],
            [30, 175], [75, 175], [120, 175], [165, 175], [210, 175],
            [52, 200], [97, 200], [142, 200], [187, 200], [232, 200],
            [30, 225], [75, 225], [120, 225], [165, 225], [210, 225],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="7" />
          ))}
        </g>
      </g>
    </svg>
  );
}

export function FlagUK({ className = "w-8 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-md shadow-sm overflow-hidden inline-block shrink-0 ${className}`}
      aria-label="Flag of United Kingdom"
    >
      <clipPath id="uk-clip">
        <path d="M0 0h640v480H0z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="60" d="M0 0l640 480M640 0L0 480" />
        <path stroke="#c8102e" strokeWidth="36" d="M0 0l640 480M640 0L0 480" />
        <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
        <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
      </g>
    </svg>
  );
}

export function FlagUAE({ className = "w-8 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-md shadow-sm overflow-hidden inline-block shrink-0 ${className}`}
      aria-label="Flag of United Arab Emirates"
    >
      <g fillRule="evenodd">
        <path fill="#00732f" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#000" d="M0 320h640v160H0z" />
        <path fill="#f00" d="M0 0h160v480H0z" />
      </g>
    </svg>
  );
}

export function FlagIndia({ className = "w-8 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-md shadow-sm overflow-hidden inline-block shrink-0 ${className}`}
      aria-label="Flag of India"
    >
      <g fillRule="evenodd">
        {/* Saffron Top */}
        <path fill="#f93" d="M0 0h640v160H0z" />
        {/* White Middle */}
        <path fill="#fff" d="M0 160h640v160H0z" />
        {/* Green Bottom */}
        <path fill="#128807" d="M0 320h640v160H0z" />
        {/* Ashoka Chakra */}
        <g transform="translate(320, 240)">
          <circle r="46" fill="none" stroke="#000080" strokeWidth="5" />
          <circle r="9" fill="#000080" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-44"
              stroke="#000080"
              strokeWidth="2.5"
              transform={`rotate(${i * 15})`}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export function FlagAustralia({ className = "w-8 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`rounded-md shadow-sm overflow-hidden inline-block shrink-0 ${className}`}
      aria-label="Flag of Australia"
    >
      <g fillRule="evenodd">
        {/* Blue Field */}
        <path fill="#00008b" d="M0 0h640v480H0z" />
        {/* Union Jack Canton */}
        <g transform="scale(0.5)">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path stroke="#fff" strokeWidth="60" d="M0 0l640 480M640 0L0 480" />
          <path stroke="#c8102e" strokeWidth="36" d="M0 0l640 480M640 0L0 480" />
          <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
          <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
        </g>
        {/* Commonwealth Star */}
        <g fill="#fff">
          <circle cx="160" cy="360" r="32" />
          {/* Southern Cross */}
          <circle cx="480" cy="110" r="14" />
          <circle cx="540" cy="180" r="14" />
          <circle cx="480" cy="390" r="14" />
          <circle cx="420" cy="240" r="14" />
          <circle cx="505" cy="285" r="9" />
        </g>
      </g>
    </svg>
  );
}

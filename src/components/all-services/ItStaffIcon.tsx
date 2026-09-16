import IconBackgroundLayout from "./IconBackgroundLayout";

export default function ItStaffIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="gear-shadow-green" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#059669" floodOpacity="0.25"/>
        </filter>
        <filter id="person-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#065F46" floodOpacity="0.15"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="green" />
      <g transform="translate(50, 50) scale(1.15) translate(-50, -50)">
        {/* Left Person */}
        <g transform="translate(32, 52)">
          <circle cx="0" cy="-12" r="7" fill="#10B981" />
          <path d="M -13 10 C -13 0 -5 -2 0 -2 C 5 -2 13 0 13 10 Z" fill="#10B981" />
        </g>
        
        {/* Right Person */}
        <g transform="translate(68, 52)">
          <circle cx="0" cy="-12" r="7" fill="#10B981" />
          <path d="M -13 10 C -13 0 -5 -2 0 -2 C 5 -2 13 0 13 10 Z" fill="#10B981" />
        </g>
        
        {/* Center Person (Main/Darker) with subtle shadow */}
        <g transform="translate(50, 55)" filter="url(#person-shadow)">
          <circle cx="0" cy="-17" r="10.5" fill="#059669" />
          <path d="M -18 10 C -18 -6 -8 -7 0 -7 C 8 -7 18 -6 18 10 Z" fill="#059669" />
        </g>
        
        {/* Green Gear Overlapping with drop shadow */}
        <g transform="translate(74, 63)" filter="url(#gear-shadow-green)">
          <circle cx="0" cy="0" r="11" fill="#10B981" />
          {/* Mathematically perfect gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path d="M -2.5 -9 L -1.5 -13.5 L 1.5 -13.5 L 2.5 -9 Z" fill="#10B981" stroke="#10B981" strokeWidth="1" strokeLinejoin="round" />
            </g>
          ))}
          <circle cx="0" cy="0" r="4.5" fill="#ECFDF5" />
        </g>
      </g>
    </svg>
  );
}

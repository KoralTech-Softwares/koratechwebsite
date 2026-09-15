import IconBackgroundLayout from "./IconBackgroundLayout";

export default function WebAppIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="web-shadow" x="-20%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#1E3A8A" floodOpacity="0.3"/>
        </filter>
        <filter id="phone-shadow" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="-2" dy="4" stdDeviation="4" floodColor="#1E3A8A" floodOpacity="0.4"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="blue" />
      <g transform="translate(18, 30)">
        {/* Shadow base */}
        <g filter="url(#web-shadow)">
          {/* Screen Outer Frame */}
          <rect x="0" y="0" width="52" height="34" rx="2" fill="#1E40AF" />
          {/* Keyboard Base */}
          <path d="M -4 34 L 56 34 L 52 38 L 0 38 Z" fill="#1E3A8A" />
          <path d="M -4 34 L 56 34 L 54 36 L -2 36 Z" fill="#2563EB" />
        </g>
        
        {/* Screen Inner */}
        <rect x="2.5" y="2.5" width="47" height="27" fill="#F0F9FF" />
        
        {/* Code symbol on Laptop */}
        <g transform="translate(26, 16) scale(1.1)">
          <path d="M -8 -4 L -13 0 L -8 4 M 8 -4 L 13 0 L 8 4 M -3 -6 L 3 6" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* Phone */}
      <g transform="translate(62, 44)" filter="url(#phone-shadow)">
        <rect x="0" y="0" width="18" height="28" rx="3" fill="#1E40AF" />
        <rect x="1.5" y="1.5" width="15" height="22" rx="1" fill="#F0F9FF" />
        {/* Phone home button */}
        <circle cx="9" cy="25.5" r="1.2" fill="#60A5FA" />
        
        {/* Code symbol on Phone */}
        <g transform="translate(9, 12.5) scale(0.65)">
          <path d="M -6 -4 L -10 0 L -6 4 M 6 -4 L 10 0 L 6 4 M -2 -6 L 2 6" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

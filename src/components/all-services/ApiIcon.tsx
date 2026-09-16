import IconBackgroundLayout from "./IconBackgroundLayout";

export default function ApiIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="cloud-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#38BDF8" floodOpacity="0.3"/>
        </filter>
        <filter id="gear-shadow-orange" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#F97316" floodOpacity="0.3"/>
        </filter>
        <filter id="server-shadow" x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1E3A8A" floodOpacity="0.3"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="blue" />
      <g stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 25 50 L 15 50 L 15 60 L 20 60" />
        <circle cx="21" cy="60" r="1.5" fill="#7DD3FC" stroke="none" />
        <path d="M 30 35 L 20 35 L 20 25 L 25 25" />
        <circle cx="26" cy="25" r="1.5" fill="#7DD3FC" stroke="none" />
      </g>

      <g transform="translate(0, 5)">
        {/* Main Blue Cloud */}
        <g filter="url(#cloud-shadow)">
          <path d="M 22 45 C 22 35 30 28 40 28 C 45 18 62 18 68 28 C 76 28 82 35 82 45 C 82 55 76 60 68 60 H 30 C 24 60 22 52 22 45 Z" fill="#38BDF8" />
          <text x="52" y="49" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">API</text>
        </g>
        
        {/* Servers */}
        <g transform="translate(42, 60)" filter="url(#server-shadow)">
          {/* Server 1 (Top) */}
          <rect x="0" y="0" width="28" height="8" rx="1.5" fill="#1E40AF" />
          <path d="M 0 0 L 28 0 L 28 2 L 0 2 Z" fill="#3B82F6" />
          <circle cx="5" cy="5" r="1.2" fill="#60A5FA" />
          <circle cx="9" cy="5" r="1.2" fill="#60A5FA" />
          
          {/* Server 2 (Bottom) */}
          <rect x="0" y="10" width="28" height="8" rx="1.5" fill="#1E40AF" />
          <path d="M 0 10 L 28 10 L 28 12 L 0 12 Z" fill="#3B82F6" />
          <circle cx="5" cy="15" r="1.2" fill="#60A5FA" />
          <circle cx="9" cy="15" r="1.2" fill="#60A5FA" />
        </g>

        {/* Orange Gear Overlapping */}
        <g transform="translate(74, 55)" filter="url(#gear-shadow-orange)">
          <circle cx="0" cy="0" r="10" fill="#F97316" />
          <circle cx="0" cy="0" r="3.5" fill="#FFF7ED" />
          {/* Gear teeth */}
          <path d="M -2.5 -12 H 2.5 V -8 H -2.5 Z" fill="#F97316" />
          <path d="M -2.5 8 H 2.5 V 12 H -2.5 Z" fill="#F97316" />
          <path d="M -12 -2.5 H -8 V 2.5 H -12 Z" fill="#F97316" />
          <path d="M 8 -2.5 H 12 V 2.5 H 8 Z" fill="#F97316" />
          <path d="M -9 -9 L -6 -6 L -4 -8 L -7 -11 Z" fill="#F97316" />
          <path d="M 6 6 L 9 9 L 11 7 L 8 4 Z" fill="#F97316" />
          <path d="M 9 -9 L 6 -6 L 4 -8 L 7 -11 Z" fill="#F97316" />
          <path d="M -6 6 L -9 9 L -11 7 L -8 4 Z" fill="#F97316" />
        </g>
      </g>
    </svg>
  );
}

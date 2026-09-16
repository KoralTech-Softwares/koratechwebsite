import IconBackgroundLayout from "./IconBackgroundLayout";

export default function CloudIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="cloud-shadow-blue" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#38BDF8" floodOpacity="0.3"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="blue" />
      <g transform="translate(0, 5)">
        {/* Main Blue Cloud */}
        <path d="M 25 45 C 25 35 32 30 40 30 C 45 20 60 20 65 30 C 72 30 78 35 78 45 Z" fill="#38BDF8" filter="url(#cloud-shadow-blue)" />
        
        {/* Shadow under circles */}
        <ellipse cx="50" cy="62" rx="35" ry="12" fill="#E0F2FE" opacity="0.6" />
        
        {/* Azure Circle (Middle - Slightly behind/overlapping) */}
        <circle cx="50" cy="55" r="14" fill="white" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.08))" />
        <g transform="translate(42, 47) scale(0.6)">
          <path d="M12 25 L 0 25 L 12 0 Z" fill="#0078D4" />
          <path d="M14 25 L 26 25 L 16 5 L 8 18 Z" fill="#0078D4" />
        </g>
        
        {/* AWS Circle (Left) */}
        <circle cx="30" cy="55" r="14" fill="white" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.08))" />
        <g transform="translate(20, 48) scale(0.6)">
          <text x="3" y="14" fill="#232F3E" fontSize="16" fontWeight="bold" fontFamily="sans-serif">aws</text>
          <path d="M 4 18 Q 15 24 26 16 Q 20 20 12 18 Z" fill="#FF9900" />
          <path d="M 24 14 L 28 15 L 25 18 Z" fill="#FF9900" />
        </g>
        
        {/* GCP Circle (Right) */}
        <circle cx="70" cy="55" r="14" fill="white" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.08))" />
        <svg x="60" y="46" width="20" height="18" viewBox="0 2 38 32">
          {/* 1. Red Left */}
          <path d="M 14 15 A 7 7 0 0 0 9 27" fill="none" stroke="#EA4335" strokeWidth="6" strokeLinecap="round" />
          {/* 2. Yellow Bottom */}
          <path d="M 9 27 L 26 27" fill="none" stroke="#FBBC05" strokeWidth="6" strokeLinecap="round" />
          {/* 3. Green Right */}
          <path d="M 25 27 A 6 6 0 0 0 33 20" fill="none" stroke="#34A853" strokeWidth="6" strokeLinecap="round" />
          {/* 4. Blue Top */}
          <path d="M 14 15 A 8 8 0 0 1 28 14 A 6 6 0 0 1 33 21" fill="none" stroke="#4285F4" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </g>
    </svg>
  );
}

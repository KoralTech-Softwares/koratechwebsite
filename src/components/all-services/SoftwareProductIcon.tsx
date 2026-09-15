import IconBackgroundLayout from "./IconBackgroundLayout";

export default function SoftwareProductIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="stack-shadow" x="-20%" y="-10%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0369A1" floodOpacity="0.25"/>
        </filter>
        <filter id="gear-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#1E40AF" floodOpacity="0.3"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="blue" />
      <g transform="translate(0, 5)">
        {/* Stacked 3D Thick Layers */}
        <g transform="translate(45, 45)">
          
          {/* Bottom Layer with shadow */}
          <g filter="url(#stack-shadow)">
            {/* Left Side */}
            <path d="M -22 13 L 0 26 L 0 32 L -22 19 Z" fill="#0369A1" />
            {/* Right Side */}
            <path d="M 22 13 L 0 26 L 0 32 L 22 19 Z" fill="#0284C7" />
            {/* Top Face */}
            <path d="M 0 26 L 22 13 L 0 0 L -22 13 Z" fill="#38BDF8" />
          </g>
          
          {/* Middle Layer */}
          <g>
            {/* Left Side */}
            <path d="M -22 0 L 0 13 L 0 19 L -22 6 Z" fill="#0369A1" />
            {/* Right Side */}
            <path d="M 22 0 L 0 13 L 0 19 L 22 6 Z" fill="#0284C7" />
            {/* Top Face */}
            <path d="M 0 13 L 22 0 L 0 -13 L -22 0 Z" fill="#38BDF8" />
          </g>
          
          {/* Top Layer */}
          <g>
            {/* Left Side */}
            <path d="M -22 -13 L 0 0 L 0 6 L -22 -7 Z" fill="#0369A1" />
            {/* Right Side */}
            <path d="M 22 -13 L 0 0 L 0 6 L 22 -7 Z" fill="#0284C7" />
            {/* Top Face */}
            <path d="M 0 0 L 22 -13 L 0 -26 L -22 -13 Z" fill="#38BDF8" />
            
            {/* Code symbol on top face */}
            <g transform="translate(0, -11) scale(1.1)">
              <path d="M -6 -2 L -9 1 L -6 4 M 6 -2 L 9 1 L 6 4 M -2 -4 L 2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </g>
        
        {/* Blue Gear Overlapping with shadow */}
        <g transform="translate(68, 58)" filter="url(#gear-shadow)">
          <circle cx="0" cy="0" r="10" fill="#2563EB" />
          <circle cx="0" cy="0" r="4" fill="#F0F9FF" />
          {/* Gear teeth */}
          <path d="M -2 -12 H 2 V -8 H -2 Z" fill="#2563EB" />
          <path d="M -2 8 H 2 V 12 H -2 Z" fill="#2563EB" />
          <path d="M -12 -2 H -8 V 2 H -12 Z" fill="#2563EB" />
          <path d="M 8 -2 H 12 V 2 H 8 Z" fill="#2563EB" />
          <path d="M -9 -9 L -6 -6 L -4 -8 L -7 -11 Z" fill="#2563EB" />
          <path d="M 6 6 L 9 9 L 11 7 L 8 4 Z" fill="#2563EB" />
          <path d="M 9 -9 L 6 -6 L 4 -8 L 7 -11 Z" fill="#2563EB" />
          <path d="M -6 6 L -9 9 L -11 7 L -8 4 Z" fill="#2563EB" />
        </g>
      </g>
    </svg>
  );
}

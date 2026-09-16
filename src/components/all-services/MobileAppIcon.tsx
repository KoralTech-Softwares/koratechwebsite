import IconBackgroundLayout from "./IconBackgroundLayout";

export default function MobileAppIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="phone-shadow-blue" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="-2" dy="5" stdDeviation="4" floodColor="#1E3A8A" floodOpacity="0.4"/>
        </filter>
        <filter id="phone-shadow-green" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#064E3B" floodOpacity="0.4"/>
        </filter>
      </defs>
      <IconBackgroundLayout theme="green" />
      <g transform="translate(15, 65) rotate(-10) scale(0.8)">
        <path d="M0,0 Q -10,-15 5,-35 Q 20,-15 15,-5 Z" fill="#4ADE80" />
        <path d="M0,0 Q -10,-15 5,-35" stroke="#22C55E" strokeWidth="1" />
        <path d="M-5,5 Q -25,-5 -15,-25 Q -5,-5 -5,5 Z" fill="#86EFAC" />
      </g>
      
      {/* --- Right Leaves --- */}
      <g transform="translate(85, 65) rotate(20) scale(0.9)">
        <path d="M0,0 Q -10,-20 -5,-40 Q 15,-20 10,-5 Z" fill="#22C55E" />
        <path d="M0,0 Q -10,-20 -5,-40" stroke="#16A34A" strokeWidth="1" />
        <path d="M5,5 Q 25,-10 15,-30 Q 5,-10 5,5 Z" fill="#4ADE80" />
      </g>
      
      {/* --- Left Phone (Apple/Blue) --- */}
      <g transform="translate(32, 53) rotate(-5) translate(-32, -53)" filter="url(#phone-shadow-blue)">
        {/* Phone Body with shadow */}
        <rect x="19" y="24" width="28" height="56" rx="4" fill="#1E3A8A" stroke="#1E40AF" strokeWidth="1.5" />
        {/* Screen/Inner border */}
        <rect x="21" y="26" width="24" height="52" rx="3" fill="#172554" />
        {/* Notch */}
        <path d="M 29 26 L 29 29 C 29 30 30 31 31 31 L 35 31 C 36 31 37 30 37 29 L 37 26 Z" fill="#1E3A8A" />
        {/* Side Buttons */}
        <rect x="18" y="35" width="1" height="6" fill="#1E40AF" />
        <rect x="18" y="43" width="1" height="6" fill="#1E40AF" />
        {/* Home Indicator */}
        <rect x="29" y="75" width="8" height="1.5" rx="0.75" fill="#60A5FA" />
        
        {/* Apple Logo embedded with a clean viewBox */}
        <svg x="25" y="44" width="16" height="18" viewBox="0 0 384 512">
          <path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
      </g>
      
      {/* --- Right Phone (Android/Green) --- */}
      <g transform="translate(68, 51) rotate(5) translate(-68, -51)" filter="url(#phone-shadow-green)">
        {/* Phone Body with shadow */}
        <rect x="53" y="21" width="30" height="58" rx="4" fill="#047857" stroke="#059669" strokeWidth="1.5" />
        {/* Screen/Inner border */}
        <rect x="55" y="23" width="26" height="54" rx="3" fill="#10B981" />
        {/* Notch (Punch hole) */}
        <circle cx="68" cy="27" r="1.5" fill="#047857" />
        {/* Side Buttons */}
        <rect x="83" y="32" width="1" height="8" fill="#059669" />
        {/* Home Indicator */}
        <rect x="63" y="74" width="10" height="1.5" rx="0.75" fill="#6EE7B7" />
        
        {/* Android Logo embedded with a clean viewBox drawn with primitives */}
        <svg x="58" y="42" width="20" height="20" viewBox="0 0 100 100">
          {/* Antennae */}
          <path d="M30 30 L 38 38" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M70 30 L 62 38" stroke="white" strokeWidth="4" strokeLinecap="round" />
          {/* Head */}
          <path d="M20 50 A 30 30 0 0 1 80 50 Z" fill="white" />
          <circle cx="40" cy="40" r="3" fill="#10B981" />
          <circle cx="60" cy="40" r="3" fill="#10B981" />
          {/* Body */}
          <rect x="20" y="53" width="60" height="40" rx="6" fill="white" />
          {/* Arms */}
          <rect x="4" y="53" width="13" height="30" rx="6" fill="white" />
          <rect x="83" y="53" width="13" height="30" rx="6" fill="white" />
        </svg>
      </g>
    </svg>
  );
}

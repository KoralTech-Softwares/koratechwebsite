import IconBackgroundLayout from "./IconBackgroundLayout";

export default function AiIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="ai-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#8B5CF6" floodOpacity="0.4"/>
        </filter>
        <filter id="brain-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#FF2A85" floodOpacity="0.2"/>
        </filter>
        <linearGradient id="ai-grad" x1="50" y1="40" x2="80" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A855F7" />
          <stop offset="1" stopColor="#7E22CE" />
        </linearGradient>
        <linearGradient id="brain-left" x1="20" y1="20" x2="48" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF2A85" />
          <stop offset="1" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="brain-right" x1="52" y1="20" x2="80" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6" />
          <stop offset="1" stopColor="#D926A9" />
        </linearGradient>
      </defs>
      <IconBackgroundLayout theme="pink" />
      <g transform="translate(0, 5)">
        {/* Brain Left Half */}
        <g filter="url(#brain-glow)">
          <path d="M 47 15 C 32 15 25 20 25 30 C 12 32 12 45 20 52 C 15 62 25 75 38 75 C 45 75 47 65 47 60 Z" fill="url(#brain-left)" />
          {/* Folds (Sulci) - Light Pink Strokes */}
          <path d="M 40 25 Q 32 25 30 32" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
          <path d="M 42 38 Q 30 38 27 48" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
          <path d="M 40 55 Q 32 55 30 65" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
          <path d="M 28 35 Q 22 35 22 42" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
        </g>
        
        {/* Brain Right Half */}
        <path d="M 50 15 C 65 15 72 20 72 30 C 85 32 85 45 77 52 C 82 62 72 75 59 75 C 52 75 50 65 50 60 Z" fill="url(#brain-right)" />
        {/* Folds (Sulci) - Light Pink Strokes */}
        <path d="M 57 25 Q 65 25 67 32" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
        <path d="M 55 38 Q 67 38 70 48" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
        <path d="M 57 55 Q 65 55 67 65" stroke="#FDF2F8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />

        {/* Central Fissure Shadow/Highlight */}
        <path d="M 48.5 15 L 48.5 72" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

        {/* Antenna / Rod */}
        <g stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Top Hook */}
          <path d="M 68 35 L 68 15 L 73 15 L 73 18" />
          {/* Bottom Loop */}
          <path d="M 68 67 L 68 76" />
          <circle cx="68" cy="79" r="2.5" />
        </g>
        
        {/* Top Bracket on the rod */}
        <rect x="64" y="27" width="8" height="4" rx="1.5" fill="#C4B5FD" />
        
        {/* Purple AI Block with Drop Shadow */}
        <rect x="52" y="32" width="32" height="32" rx="6" fill="url(#ai-grad)" filter="url(#ai-shadow)" />
        
        {/* 4 Screws/Dots on the block */}
        <circle cx="56" cy="36" r="1" fill="#DDD6FE" />
        <circle cx="80" cy="36" r="1" fill="#DDD6FE" />
        <circle cx="56" cy="60" r="1" fill="#DDD6FE" />
        <circle cx="80" cy="60" r="1" fill="#DDD6FE" />
        
        {/* Text */}
        <text x="68" y="54" fill="white" fontSize="17" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">AI</text>
      </g>
    </svg>
  );
}

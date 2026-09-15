import React from 'react';

type Theme = 'blue' | 'green' | 'pink' | 'purple';

const THEME_COLORS = {
  blue: {
    blob: '#D6EFFF', // Very visible, neat light blue
    cloud: '#BEE0FF',
    node: '#93C5FD',
    sparkle: '#60A5FA'
  },
  green: {
    blob: '#D1FAE5',
    cloud: '#A7F3D0',
    node: '#6EE7B7',
    sparkle: '#34D399'
  },
  pink: {
    blob: '#FCE7F3',
    cloud: '#FBCFE8',
    node: '#F9A8D4',
    sparkle: '#F472B6'
  },
  purple: {
    blob: '#EDE9FE',
    cloud: '#DDD6FE',
    node: '#C4B5FD',
    sparkle: '#A78BFA'
  }
};

export default function IconBackgroundLayout({ theme = 'blue' }: { theme?: Theme }) {
  const colors = THEME_COLORS[theme];

  return (
    <g>
      {/* 1. Main Cloud Bank Blob (Massive and Wide) */}
      <g fill={colors.blob}>
        {/* Base filler */}
        <rect x="5" y="45" width="90" height="35" rx="15" />
        {/* Top central massive bump */}
        <circle cx="50" cy="35" r="30" />
        {/* Right bumps */}
        <circle cx="75" cy="45" r="22" />
        <circle cx="88" cy="60" r="16" />
        {/* Left bumps */}
        <circle cx="25" cy="45" r="22" />
        <circle cx="12" cy="60" r="16" />
      </g>
      
      {/* 2. Secondary Overlapping Cloud (Left Foreground) */}
      <g fill={colors.cloud} opacity="0.8">
        <circle cx="15" cy="65" r="10" />
        <circle cx="28" cy="58" r="14" />
        <circle cx="40" cy="65" r="10" />
        <rect x="15" y="58" width="25" height="17" rx="6" />
      </g>

      {/* 3. Geometric Nodes (Right Background) */}
      <g stroke={colors.node} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 75 25 L 88 18 L 96 28" />
        <circle cx="75" cy="25" r="2" fill={colors.node} />
        <circle cx="88" cy="18" r="2" fill={colors.node} />
        <circle cx="96" cy="28" r="1.5" fill={colors.node} />
        
        <path d="M 85 75 L 94 75" />
        <circle cx="85" cy="75" r="2" fill={colors.node} />
        <circle cx="94" cy="75" r="2" fill={colors.node} />
      </g>

      {/* 4. Sparkles / 4-Point Stars */}
      <g fill={colors.sparkle}>
        <path d="M 15 22 Q 18 22 18 19 Q 18 22 21 22 Q 18 22 18 25 Q 18 22 15 22 Z" />
        <path d="M 90 10 Q 92 10 92 8 Q 92 10 94 10 Q 92 10 92 12 Q 92 10 90 10 Z" />
        <path d="M 35 85 Q 38 85 38 82 Q 38 85 41 85 Q 38 85 38 88 Q 38 85 35 85 Z" />
      </g>
    </g>
  );
}

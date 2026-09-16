import IconBackgroundLayout from "./IconBackgroundLayout";

export default function BleIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="ble-shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#6366F1" floodOpacity="0.4"/>
        </filter>
        <filter id="device-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-2" dy="4" stdDeviation="3" floodColor="#4C1D95" floodOpacity="0.4"/>
        </filter>
        <linearGradient id="ble-grad" x1="20" y1="20" x2="60" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="device-grad" x1="60" y1="40" x2="80" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7C3AED" />
          <stop offset="1" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <IconBackgroundLayout theme="purple" />
      <g stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M 22 35 A 18 18 0 0 0 22 65" />
        <path d="M 16 30 A 25 25 0 0 0 16 70" opacity="0.6" />
        <path d="M 10 25 A 32 32 0 0 0 10 75" opacity="0.3" />
      </g>

      <g transform="translate(0, 5)">
        {/* Main Bluetooth Circle */}
        <circle cx="48" cy="45" r="23" fill="url(#ble-grad)" filter="url(#ble-shadow)" />
        
        {/* Bluetooth Logo */}
        <g stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(48, 45) scale(0.9)">
          <path d="M -5 -10 L 5 0 L -5 10 L 5 20 L -5 30 V -10 Z" transform="translate(0, -10)" />
          <path d="M -5 0 L 5 -10 M -5 0 L 5 10" />
        </g>

        {/* Right Top Signal Waves (From Device) */}
        <g stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" fill="none" transform="translate(74, 40)">
          <path d="M -6 -2 A 8 8 0 0 1 6 -2" />
          <path d="M -10 -6 A 14 14 0 0 1 10 -6" opacity="0.6" />
          <path d="M -14 -10 A 20 20 0 0 1 14 -10" opacity="0.3" />
        </g>

        {/* Small Purple IoT Device */}
        <rect x="66" y="48" width="16" height="24" rx="3" fill="url(#device-grad)" filter="url(#device-shadow)" />
        {/* Top bar on device */}
        <path d="M 66 51 L 82 51 L 82 54 L 66 54 Z" fill="#8B5CF6" />
        {/* Center Diamond on device */}
        <path d="M 74 57 L 76 59 L 74 61 L 72 59 Z" fill="#DDD6FE" />
        <circle cx="74" cy="67" r="1" fill="#C4B5FD" />
      </g>
    </svg>
  );
}

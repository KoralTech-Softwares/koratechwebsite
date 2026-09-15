import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="currentColor"
    >
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function ReactNativeIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" fill="#38bdf8" />
      <path d="M9 6h6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="12" cy="11" rx="4" ry="1.8" stroke="#22d3ee" strokeWidth="1" />
      <ellipse cx="12" cy="11" rx="4" ry="1.8" stroke="#22d3ee" strokeWidth="1" transform="rotate(60 12 11)" />
      <ellipse cx="12" cy="11" rx="4" ry="1.8" stroke="#22d3ee" strokeWidth="1" transform="rotate(120 12 11)" />
    </svg>
  );
}

export function NodeIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 3L3 10.5V25.5L16 33L29 25.5V10.5L16 3Z"
        fill="#339933"
        fillOpacity="0.2"
        stroke="#539e43"
        strokeWidth="1.5"
      />
      <path
        d="M16 11V21M11 14L16 11L21 14M11 18L16 21L21 18"
        stroke="#6cc24a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4 8.5H10M7 8.5V17M13.5 15.5C14.2 16.2 15.2 16.6 16.2 16.5C17.5 16.5 18.5 15.7 18.5 14.5C18.5 13.3 17.5 12.7 16 12.2C14.5 11.7 13.8 11.2 13.8 10.2C13.8 9.2 14.7 8.5 15.8 8.5C16.8 8.5 17.6 8.9 18.2 9.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AzureIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.7 3.5L5.5 16.2H11.8L13.5 12.8L18.5 19.5H22L12.7 3.5Z"
        fill="#0078D4"
      />
      <path
        d="M2 19.5H8.2L12.5 12.5L10.3 8.5L2 19.5Z"
        fill="#50E6FF"
      />
    </svg>
  );
}

export function FirebaseIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 18.5L6.8 4.2C6.9 3.6 7.7 3.4 8.1 3.9L11.5 9.8L4.5 18.5Z"
        fill="#FFA000"
      />
      <path
        d="M13.5 2.3C13.1 1.7 12.2 1.9 12 2.6L4.5 18.5L13.5 2.3Z"
        fill="#F57C00"
      />
      <path
        d="M19.5 18.5L16.2 8.5C15.9 7.8 15 7.7 14.6 8.3L4.5 18.5H19.5Z"
        fill="#FFCA28"
      />
      <path
        d="M19.5 18.5L13.2 22.2C12.5 22.6 11.5 22.6 10.8 22.2L4.5 18.5H19.5Z"
        fill="#FFA000"
      />
    </svg>
  );
}

export function FlutterIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M14 2L3 13L6.5 16.5L17.5 5.5H14Z" fill="#54C5F8" />
      <path d="M14 10.5L8.5 16L14 21.5H17.5L12 16L17.5 10.5H14Z" fill="#01579B" />
      <path d="M8.5 16L11 13.5L13.5 16L11 18.5L8.5 16Z" fill="#29B6F6" />
    </svg>
  );
}

export function AwsIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <path d="M6 15C9 17 15 17 18 15M16.5 13.5L18.5 15L16.5 16.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9L8 13L10 9M11 9V13M14 9C15.5 9 15.5 11 14 11C15.5 11 15.5 13 14 13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MongoIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C12 2 6 7.5 6 13C6 16.5 8.7 19.5 12 22C15.3 19.5 18 16.5 18 13C18 7.5 12 2 12 2Z" fill="#47A248" fillOpacity="0.2" stroke="#47A248" strokeWidth="1.5" />
      <path d="M12 2V22" stroke="#13AA52" strokeWidth="1.5" />
    </svg>
  );
}

export function PostgresIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#336791" />
      <path d="M8 8C8 6 10 5 12 5C14 5 16 6 16 8C16 11 13 12 13 14H11C11 12 8 11 8 8Z" stroke="white" strokeWidth="1.5" />
      <path d="M10 17H14M12 14V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function FigmaIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 2H12V7H8C6.6 7 5.5 5.9 5.5 4.5C5.5 3.1 6.6 2 8 2Z" fill="#F24E1E" />
      <path d="M12 2H16C17.4 2 18.5 3.1 18.5 4.5C18.5 5.9 17.4 7 16 7H12V2Z" fill="#FF7262" />
      <path d="M8 7H12V12H8C6.6 12 5.5 10.9 5.5 9.5C5.5 8.1 6.6 7 8 7Z" fill="#A259FF" />
      <path d="M12 7H16C17.4 7 18.5 8.1 18.5 9.5C18.5 10.9 17.4 12 16 12C14.6 12 13.5 10.9 13.5 9.5H12V7Z" fill="#1ABCFE" />
      <path d="M8 12H12V17C12 18.4 10.9 19.5 9.5 19.5C8.1 19.5 7 18.4 7 17C7 15.6 8.1 14.5 9.5 14.5H8V12Z" fill="#0ACF83" />
    </svg>
  );
}

export function GoogleMapsIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z" fill="#EA4335" />
      <circle cx="12" cy="9" r="3.5" fill="white" />
      <circle cx="12" cy="9" r="2" fill="#4285F4" />
    </svg>
  );
}

export function StripeIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path d="M10 8.5C10 7.7 10.7 7 11.7 7C13.2 7 14.2 7.7 14.7 8.2L15.5 6.5C14.7 5.8 13.3 5.2 11.7 5.2C9.5 5.2 8 6.5 8 8.7C8 12.2 13 11.5 13 13.5C13 14.5 12 15.2 10.8 15.2C9 15.2 7.8 14.2 7.2 13.5L6.5 15.5C7.2 16.3 8.8 17 10.8 17C13.2 17 15 15.7 15 13.3C15 9.7 10 10.3 10 8.5Z" fill="white" />
    </svg>
  );
}

export function SequelizeIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#52B0E7" strokeWidth="1.5" fill="#254078" fillOpacity="0.4" />
      <path d="M3 7L12 12L21 7M12 12V22" stroke="#52B0E7" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="#00d8ff" />
    </svg>
  );
}

export function FirestoreIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="#FFCA28" fillOpacity="0.3" stroke="#FFCA28" strokeWidth="1.5" />
      <path d="M4 5V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V5" stroke="#FFA000" strokeWidth="1.5" />
      <path d="M4 12V19C4 20.7 7.6 22 12 22C16.4 22 20 20.7 20 19V12" stroke="#F57C00" strokeWidth="1.5" />
    </svg>
  );
}

export function DotNetIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#512BD4" fillOpacity="0.25" stroke="#512BD4" strokeWidth="1.5" />
      <path d="M7 15V9M12 9V15L16 9V15M17 15H20" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AIIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" fill="#14b8a6" fillOpacity="0.4" stroke="#2dd4bf" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="19" cy="4" r="1.5" fill="#38bdf8" />
      <circle cx="4" cy="19" r="1.5" fill="#818cf8" />
    </svg>
  );
}

export function ApiIcon({ className = "h-5 w-5", size }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12H9M15 12H20M9 6L15 6M9 18L15 18" stroke="#3391ea" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="12" r="2" fill="#0076e4" />
      <circle cx="15" cy="12" r="2" fill="#14b8a6" />
    </svg>
  );
}

export function TechIconByName({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const n = name.toLowerCase().trim();
  if (n.includes("react native")) return <ReactNativeIcon className={className} />;
  if (n.includes("react") || n.includes("ionic react")) return <ReactIcon className={className} />;
  if (n.includes("node")) return <NodeIcon className={className} />;
  if (n.includes("typescript")) return <TypeScriptIcon className={className} />;
  if (n.includes("azure")) return <AzureIcon className={className} />;
  if (n.includes("firebase") || n.includes("fcm")) return <FirebaseIcon className={className} />;
  if (n.includes("firestore") || n.includes("geofirestore")) return <FirestoreIcon className={className} />;
  if (n.includes("flutter")) return <FlutterIcon className={className} />;
  if (n.includes("aws") || n.includes("cloudfront")) return <AwsIcon className={className} />;
  if (n.includes("mongo")) return <MongoIcon className={className} />;
  if (n.includes("postgres") || n.includes("sql") || n.includes("sequelize")) return <PostgresIcon className={className} />;
  if (n.includes("figma")) return <FigmaIcon className={className} />;
  if (n.includes("map")) return <GoogleMapsIcon className={className} />;
  if (n.includes("stripe") || n.includes("razorpay")) return <StripeIcon className={className} />;
  if (n.includes(".net") || n.includes("c#")) return <DotNetIcon className={className} />;
  if (n.includes("ai") || n.includes("alpr") || n.includes("tensor") || n.includes("vision") || n.includes("opencv"))
    return <AIIcon className={className} />;
  return <ApiIcon className={className} />;
}

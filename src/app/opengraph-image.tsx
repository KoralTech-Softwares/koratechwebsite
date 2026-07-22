import { ImageResponse } from "next/og";

export const alt =
  "Koraltech Softwares — IT Consulting & AWS Cloud Services in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #050508 0%, #12121a 50%, #1a1a26 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #14b8a6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            K
          </div>
          <span style={{ fontSize: 36, fontWeight: 700, color: "#ffffff" }}>
            Koraltech Softwares
          </span>
        </div>
        <p
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          IT Consulting Bengaluru · AWS Cloud · AI Integration
        </p>
        <p style={{ fontSize: 28, color: "#94a3b8", marginTop: 24, maxWidth: 800 }}>
          AWS Cloud migrations, IT staffing, application maintenance, and AI
          orchestration layer integration.
        </p>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const alt = "Sura Itana, software engineer and CTO at Yeneb";
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
          position: "relative",
          background: "#070D11",
          color: "#E6EAEE",
          fontFamily: "serif",
        }}
      >
        {/* Route motif from the site's hero */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <g stroke="rgba(230,234,238,0.10)" strokeWidth="2" fill="none">
            <path d="M760 0 V630 M900 0 V630 M1040 0 V630 M620 140 H1200 M620 300 H1200 M620 460 H1200" />
          </g>
          <path
            d="M760 540 V460 H900 V300 H1040 V140"
            stroke="#FE7F2D"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="760" cy="540" r="14" fill="#070D11" stroke="#FE7F2D" strokeWidth="6" />
          <circle cx="1040" cy="140" r="16" fill="#E6EAEE" />
        </svg>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            width: 760,
          }}
        >
          <div style={{ fontSize: 34, color: "#93A1AB", fontFamily: "sans-serif" }}>Sura Itana</div>
          <div style={{ fontSize: 68, lineHeight: 1.08, marginTop: 20, letterSpacing: -1.5 }}>
            Software engineer who designs, builds, and ships complete products.
          </div>
          <div style={{ fontSize: 30, color: "#FE7F2D", marginTop: 36, fontFamily: "sans-serif" }}>
            CTO at Yeneb
          </div>
        </div>
      </div>
    ),
    size
  );
}

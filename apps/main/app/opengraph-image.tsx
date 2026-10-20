import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Sheriax — The company behind Tat’heer. Currently in development.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public/logo/Sheriax-Logo.png"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fbfaf7",
          color: "#242923",
          padding: "56px 68px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 30,
          }}
        >
          {/* ImageResponse renders a data URI directly. */}
          <img
            src={`data:image/png;base64,${logo.toString("base64")}`}
            width="38"
            height="38"
            alt=""
          />
          <span>Sheriax</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 64,
            fontSize: 83,
            lineHeight: 1.06,
            letterSpacing: "-4px",
          }}
        >
          <span>The company</span>
          <div style={{ display: "flex", gap: 20 }}>
            <span>behind</span>
            <span style={{ color: "#9a482f", marginLeft: 20 }}>Tat’heer.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 24,
            borderTop: "1px solid #dcded5",
            fontSize: 22,
            color: "#5c6159",
          }}
        >
          <span>Currently in development</span>
          <span>sheriax.com</span>
        </div>
      </div>
    ),
    size,
  );
}

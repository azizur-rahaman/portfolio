import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Azizur Rahaman — Product Engineer (Flutter, Next.js, Spring Boot)";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const avatarPath = path.join(process.cwd(), "public/images/avatar.png");
  const avatarBuffer = await readFile(avatarPath);
  const avatarDataUri = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#111113",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          <img
            src={avatarDataUri}
            alt="Azizur Rahaman"
            width={132}
            height={132}
            style={{
              borderRadius: "9999px",
              border: "2px solid #e4e4e7",
              objectFit: "cover",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "22px",
                color: "#52525b",
                marginBottom: "8px",
              }}
            >
              azizurrahaman.com
            </span>
            <h1
              style={{
                fontSize: "62px",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              Azizur Rahaman
            </h1>
            <p
              style={{
                fontSize: "28px",
                color: "#52525b",
                margin: "12px 0 0 0",
              }}
            >
              Product Engineer · Flutter, Next.js, Spring Boot &amp; Cloud
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "36px",
            borderTop: "2px solid #e4e4e7",
          }}
        >
          <div style={{ display: "flex", gap: "56px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "42px", fontWeight: 700 }}>5+</span>
              <span style={{ fontSize: "20px", color: "#52525b" }}>
                Years Experience
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "42px", fontWeight: 700 }}>10+</span>
              <span style={{ fontSize: "20px", color: "#52525b" }}>
                Years Programming
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "42px", fontWeight: 700 }}>110K+</span>
              <span style={{ fontSize: "20px", color: "#52525b" }}>
                Product Downloads
              </span>
            </div>
          </div>

          <span
            style={{
              fontSize: "22px",
              color: "#52525b",
            }}
          >
            Dhaka, Bangladesh
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

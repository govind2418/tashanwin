import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0F",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(201,154,60,0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(244,201,107,0.22), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #F4C96B, #C99A3C)",
              fontSize: 44,
              fontWeight: 700,
              color: "#0B0B0F",
            }}
          >
            T
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#FFF3D6",
              display: "flex",
            }}
          >
            {SITE_NAME}
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 30,
            color: "#F4C96B",
            display: "flex",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size },
  );
}

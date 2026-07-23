import { ImageResponse } from "next/og";
import { getLogoDataUrl } from "../lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = await getLogoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <img
          src={logo}
          alt="Globe Technologies"
          width={152}
          height={152}
          style={{
            objectFit: "contain",
            width: "84%",
            height: "84%",
          }}
        />
      </div>
    ),
    size,
  );
}


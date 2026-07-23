import { ImageResponse } from "next/og";
import { getLogoDataUrl } from "../lib/brand-icon";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default async function Icon() {
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
          background: "transparent",
        }}
      >
        <img
          src={logo}
          alt="Globe Technologies"
          width={416}
          height={416}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    ),
    size,
  );
}


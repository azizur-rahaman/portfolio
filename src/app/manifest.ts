import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Azizur Rahaman — Product Engineer",
    short_name: "Azizur",
    description:
      "Portfolio of Azizur Rahaman, Product Engineer building scalable apps across mobile, web, backend, and cloud.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111113",
    icons: [
      {
        src: "/images/avatar.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

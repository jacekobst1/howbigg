import Image from "next/image";
import { ImageSizes } from "@/app/blog/types/ImageSizes";

interface MyImageProps {
  src: string;
  alt: string;
  imageSizes: ImageSizes;
}

function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#ddd" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;
}

function toBase64(str: string) {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
}

const MyImage = ({ src, alt, imageSizes }: MyImageProps) => {
  if (imageSizes[src as string]) {
    const { width, height } = imageSizes[src as string];
    const staticWidth = 745;
    const staticHeight = height / (width / 745);

    return (
      <Image
        src={src as string}
        alt={alt as string}
        width={staticWidth}
        height={staticHeight}
        placeholder={"blur"}
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(staticWidth, staticHeight)
        )}`}
      />
    );
  } else {
    return <img src={src} alt={alt} />;
  }
};

export default MyImage;

import Image from "next/image";

interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
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

const MyImage = ({ src, alt, width, height, className = "" }: MyImageProps) => {
  return (
    <Image
      src={src as string}
      alt={alt as string}
      width={width}
      height={height}
      placeholder={"blur"}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width, height)
      )}`}
      className={className}
    />
  );
};

export default MyImage;

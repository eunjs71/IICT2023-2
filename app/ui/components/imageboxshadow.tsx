import Image from "next/image";
import Blank from "./blank";

export default function ImageBoxShadow({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <>
      <Blank />
      <Blank />
      <Blank />
      <div className="w-full drop-shadow-lg rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <Blank />
      <Blank />
      <Blank />
    </>
  );
}

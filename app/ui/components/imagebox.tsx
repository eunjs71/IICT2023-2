import Image from "next/image";

export default function ImageBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

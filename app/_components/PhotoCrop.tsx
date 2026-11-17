import Image from "next/image";
import { site } from "../content";

export function PhotoCrop({ className, sizes }: { className: string; sizes: string }) {
  const { src, alt, width, height, visibleHeight } = site.photo;
  return (
    <div className={`overflow-hidden ${className}`} style={{ aspectRatio: `${width} / ${visibleHeight}` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        fetchPriority="high"
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}

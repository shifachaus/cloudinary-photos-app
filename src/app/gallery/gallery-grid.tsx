"use client";

import { ClodinaryImage } from "./clodinary-image";
import ImageGrid from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <ClodinaryImage
            key={imageData.public_id}
            imageData={imageData}
            alt="an image of something"
            width="400"
            height="400"
          />
        );
      }}
    />
  );
}

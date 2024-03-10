"use client";

import ImageGrid from "@/components/image-grid";
import { SearchResult } from "./page";
import { ClodinaryImage } from "@/components/clodinary-image";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
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

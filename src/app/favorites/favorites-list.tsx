"use client";

import ImageGrid from "@/components/image-grid";
import { ClodinaryImage } from "../gallery/clodinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setSesources] = useState(initialResources);

  useEffect(() => {
    setSesources(initialResources);
  }, [initialResources]);
  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <ClodinaryImage
            key={imageData.public_id}
            imageData={imageData}
            alt="an image of something"
            width="400"
            height="400"
            unHeart={(unHeartedResources: SearchResult) => {
              setSesources((currentResources) => {
                return currentResources.filter((resource) => {
                  return resource.public_id !== unHeartedResources.public_id;
                });
              });
            }}
          />
        );
      }}
    />
  );
}

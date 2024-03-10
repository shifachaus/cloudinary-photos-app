"use client";

import Heart from "@/components/icons/Heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { setAsFavoriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import FullHeart from "@/components/icons/full-heart";
import { ImageMenu } from "@/components/image-menu";

export function ClodinaryImage(
  props: {
    imageData: SearchResult;
    unHeart?: (unHeartedResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, unHeart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData?.tags?.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />

      {isFavorited ? (
        <FullHeart
          onClick={() => {
            unHeart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      )}

      <ImageMenu image={imageData} />
    </div>
  );
}

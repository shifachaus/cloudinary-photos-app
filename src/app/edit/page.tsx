"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>

        <div className="flex gap-4">
          <Button
            variant="destructive"
            onClick={() => setTransformation(undefined)}
          >
            clear all
          </Button>
          <Button onClick={() => setTransformation("generative-fill")}>
            Apply Generative fill
          </Button>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Apply Pixelate
          </Button>
          <Button onClick={() => setTransformation("bg-remove")}>
            Remove Background
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <CldImage
            width="300"
            height="200"
            src={publicId}
            sizes="100vw"
            alt="Description of my image"
          />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              crop="pad"
              fillBackground
              alt="some image"
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              blur="800"
              alt="some image"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              grayscale
              alt="some image"
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              pixelate
              alt="some image"
            />
          )}
          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              removeBackground
              alt="some image"
            />
          )}
        </div>
      </div>
    </section>
  );
}

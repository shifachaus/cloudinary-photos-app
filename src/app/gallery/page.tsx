import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { ClodinaryImage } from "./clodinary-image";

type SearchResult = {
  public_id: string;
};

export default async function GalleryPage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {result.resources.map((res) => {
            return (
              <ClodinaryImage
                key={res.public_id}
                src={res.public_id}
                alt="an image of something"
                width="400"
                height="400"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

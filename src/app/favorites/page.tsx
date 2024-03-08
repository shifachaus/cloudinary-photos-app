import cloudinary from "cloudinary";
import { ClodinaryImage } from "../gallery/clodinary-image";
import { SearchResult } from "../gallery/page";

export default async function FavoritePage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Image</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          {result.resources.map((res) => {
            return (
              <ClodinaryImage
                path="/favorites"
                key={res.public_id}
                imageData={res}
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

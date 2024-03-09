import cloudinary from "cloudinary";
import { ClodinaryImage } from "../gallery/clodinary-image";
import { SearchResult } from "../gallery/page";
import FavoritesList from "./favorites-list";
import { ForceRefresh } from "@/components/force-refresh";

export default async function FavoritePage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Image</h1>
        </div>

        <FavoritesList initialResources={result.resources} />
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchForm = ({ initialSearch }: { initialSearch: string }) => {
  const [tagName, setTagName] = useState(initialSearch ?? "");

  const router = useRouter();

  useEffect(() => {
    setTagName(initialSearch);
  }, [initialSearch]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
        router.refresh();
      }}
    >
      <Label htmlFor="tag-name" className="text-right">
        Album
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="tag-name"
          value={tagName}
          className="col-span-3"
        />
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;

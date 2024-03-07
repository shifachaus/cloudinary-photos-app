"use client";

import { CldImage } from "next-cloudinary";

export function ClodinaryImage(props: any) {
  return <CldImage {...props} />;
}

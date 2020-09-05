import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

export default function Home() {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      <h1 className="title">Cloudinary Gallery</h1>
      {imageIds &&
        imageIds.map((imageId, index) => (
          <Image
            key={index}
            cloudName="dskn3zjqe"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        ))}
    </div>
  );
}

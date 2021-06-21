import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Gallery = () => {
  const [galleryData, setGallery] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="drawing"]{
      title,
      image{
        asset->{
          _id,
          url
        },
      }
    }`
      )
      .then((data) => {
        setGallery(data);
      })

      .catch(console.error);
  }, []);

  return (
    <main>
      <h2 className="font-h text-8xl text-center mt-24">Gallery</h2>
      <div className="grid grid-flow-column grid-cols-4 gap-y-12 place-items-center px-24 mt-24">
        {galleryData &&
          galleryData.map((gallery, index) => (
            <div key={index} className="grid place-items-center">
              <img
                className="w-64 h-96"
                src={gallery.image.asset.url}
                alt={gallery.title}
              />
              <h3 className="text-xl mt-3">{gallery.title}</h3>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Gallery;

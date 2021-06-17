import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Gallery = () => {
  const [galleryData, setGallery] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_tpye=="drawing"]{
      name,
      drawing_image{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        console.log(data);
        setGallery(data);
      })

      .catch(console.error);
  }, []);

  return <main></main>;
};

export default Gallery;

import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Drawing from "./Drawing";

const Gallery = () => {
  const [galleryData, setGallery] = useState(null);
  const [drawing, setDrawing] = useState({
    showDrawing: false,
    image: null,
    title: null,
  });

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

  const openDrawingHandler = (index) => {
    setDrawing({
      showDrawing: true,
      image: galleryData[index].image.asset.url,
      title: galleryData[index].title,
    });
  };

  const closeDrawingHandler = () => {
    setDrawing({ showDrawing: false });
  };

  return (
    <main>
      <Drawing
        drawing={drawing.image}
        showDrawing={drawing.showDrawing}
        title={drawing.title}
        close={closeDrawingHandler}
      />
      <h2 className="font-h mt-28 text-8xl text-center">Gallery</h2>
      <div className="grid grid-cols-gallery gap-y-12 place-items-center px-24 mt-24">
        {galleryData &&
          galleryData.map((gallery, index) => (
            <div key={index} className="grid place-items-center">
              <img
                className="w-64 h-96 transform transition duration-500 hover:scale-110 hover:z-10"
                src={gallery.image.asset.url}
                alt={gallery.title}
                onClick={() => openDrawingHandler(index)}
              />
              <h3 className="text-xl mt-3">{gallery.title}</h3>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Gallery;

"use client"

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import './Gallery.scss';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const galleryTab = [
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
    { imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg" },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openLightbox = (index) => {
    console.log("Clicked image index:", index);
    setCurrentIndex(index); // Update the currentIndex
    setOpen(true); // Open the lightbox
  };

  if (!isClient) {
    return null; // Prevent SSR rendering
  }

  return (
    <div className="w-full">
      <div className="gallery-container">
        {galleryTab.map((x, index) => (
          <div key={index} className="gallery-item">
            <div className="image-wrapper">
              <div className="image" style={{ backgroundImage: `url("${x.imageUrl}")` }}>
                <div className="image-text">
                  <div className="type">{x.type}</div>
                  <div className="title">{x.title}</div>
                </div>
              </div>
              <div
                className="hover-overlay"
                onClick={() => openLightbox(index)}
              >
                <p className="overlay-text">open</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Force re-render of Lightbox using key */}
      {open && (
        <Lightbox
          key={currentIndex} // Ensure the Lightbox re-renders with the new index
          open={open}
          close={() => setOpen(false)}
          plugins={[Zoom]}
          slides={slides}
          index={currentIndex} // Pass the updated currentIndex
        />
      )}
    </div>
  );
};

export default Gallery;

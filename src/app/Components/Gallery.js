"use client"

import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import './Gallery.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const galleryTab = [
    { imageUrl: "Images/ss1.webp" },
    { imageUrl: "Images/ss2.webp" },
    { imageUrl: "Images/ss1.webp" },
    { imageUrl: "Images/ss2.webp" },
    { imageUrl: "Images/ss1.webp" },
    { imageUrl: "Images/ss2.webp" },
    { imageUrl: "Images/ss1.webp" },
    { imageUrl: "Images/ss2.webp" },
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

  
 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

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
      <Slider {...settings}>
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
        </Slider>
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

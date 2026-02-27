import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/GallerySlider.css";

import img1 from "../assets/electric-1.webp";
import img2 from "../assets/electric-2.jpg";
import img3 from "../assets/electric-3.jpg";
import img4 from "../assets/electric-4.jpg";
import img5 from "../assets/electric.webp";

const images = [img1, img2, img3, img4, img5];

export default function GallerySlider() {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery-home">
        <h1 className="watermark">GALLERY</h1>

      <div className="gallery-wrapper">
        {/* Left Arrow */}
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        {/* Thumbnail Row */}
        <div className="thumbnail-row">
          <img src={images[startIndex]} alt="thumb1" />
          <img src={images[(startIndex + 1) % images.length]} alt="thumb2" />
          <img src={images[(startIndex + 2) % images.length]} alt="thumb3" />
        </div>

        {/* Right Arrow */}
        <button className="arrow-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      {/* View All Button */}
      <button
        className="viewall-btn"
        onClick={() => navigate("/gallery")}
      >
        View More →
      </button>
    </section>
  );
}

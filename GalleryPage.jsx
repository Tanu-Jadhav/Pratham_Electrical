import { useState } from "react";
import "../css/GalleryPage.css";

/* ✅ Import All Images */
import img1 from "../assets/electric-1.webp";
import img2 from "../assets/electric-2.jpg";
import img3 from "../assets/electric-3.jpg";
import img4 from "../assets/electric-4.jpg";
import img5 from "../assets/electric.webp";

import img6 from "../assets/img1.jpg";
import img7 from "../assets/img2.jpg";
import img8 from "../assets/img3.jpg";
import img9 from "../assets/img4.jpg";
import img10 from "../assets/img5.jpg";
import img11 from "../assets/img6.jpg";
import img12 from "../assets/img7.jpeg";
import img13 from "../assets/img8.jpeg";
import img14 from "../assets/img9.jpeg";
import img15 from "../assets/img10.jpeg";
import img16 from "../assets/img11.jpeg";
import img17 from "../assets/img12.jpeg";
import img18 from "../assets/img13.jpeg";
import img19 from "../assets/img14.jpeg";
import img20 from "../assets/founder.jpeg";
import img21 from "../assets/17.jpeg";

/* ✅ Import Videos */
import vdo1 from "../assets/videos/vdo1.mp4";
import vdo2 from "../assets/videos/vdo2.mp4";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("images");

  /* ✅ Images Array */
  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  /* ✅ Videos Array */
  const allVideos = [vdo1, vdo2];

  return (
    <div className="gallery-page">
      <h1 className="gallery-title"><span className="red-line"></span> OUR <span className="watermark">PROJECTS</span> <span className="red-line"></span></h1>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "images" ? "active" : ""}
          onClick={() => setActiveTab("images")}
        >
          Images
        </button>

        <button
          className={activeTab === "videos" ? "active" : ""}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {/* Images Tab */}
      {activeTab === "images" && (
        <div className="grid">
          {allImages.map((image, index) => (
            <img key={index} src={image} alt={`gallery-${index}`} />
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === "videos" && (
        <div className="video-grid">
          {allVideos.map((video, index) => (
            <video key={index} controls>
              <source src={video} type="video/mp4" />
            </video>
          ))}
        </div>
      )}
    </div>
  );
}

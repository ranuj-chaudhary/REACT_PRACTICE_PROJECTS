import React from "react";
import "./Gallery.css";
import { RiInstagramLine } from "react-icons/ri";
import { images } from "../../constants/index";

const Gallery = () => {
  const { spoon, gallery01, gallery02, gallery03, gallery04 } = images;
  return (
    <div className="gericht__gallery">
      <div className="gericht__gallery__heading">
        <h5>Instagram</h5>
        <img src={spoon} alt="" />
        <h2 >Photo Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="gericht__gallery__images">
        <div>
          <img src={gallery04} alt="gallery images food" />
        </div>
        <div className="gericht__gallery__images__overlay">
          <img src={gallery03} alt="gallery images food" />
          <a href="">
            <RiInstagramLine color="#ffffff" size={28} />
          </a>
        </div>
        <div>
          <img
            className="gericht__gallery__image-overlay"
            src={gallery02}
            alt="gallery images food"
          />
        </div>

        <div>
          <img src={gallery01} alt="gallery images food" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

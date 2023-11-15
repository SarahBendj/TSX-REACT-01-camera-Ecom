import pictureData from "../data/pictures.json";
import RevealComponent from "../hooks/Reveal";
import { useState } from "react";
import React from "react";


type pictureProps = {
  id ?: number
  slug : string
  img : string
}
const HomeBlogSection = () => {

  const [imageIsHovered, setImageIsHovered] = useState<number>();

  const handleOnMouseEnter = (i :pictureProps) => {
    if (i.id) {
      setImageIsHovered(i.id);
    }
  };
  const handleOnMouseLeave = () => {
    setImageIsHovered(0);
  };

  return (
    <div className="SECTION">
      <h2 className="SECTION-title">Boost your Carrer!</h2>
        <div className="SECTION-content ">
          <div className="best-seller">
            {" "}
            <div className="hidden-mobile">
            <h4  style={{ marginBottom: '2rem'}}>
              Capture the Best Moments of the Year with Captura! Unlock the
              power of photography with our handpicked selection of the year's
              best cameras. From stunning landscapes to unforgettable portraits,
              these cameras have proven themselves as the go-to choice for both
              amateur and professional photographers. Discover the perfect tool
              to freeze time and create memories that last a lifetime.{" "}
            </h4> </div>
            <div className="show-mobile">
            <h4  style={{ marginBottom: '2rem'}}>
              Capture the Best Moments of the Year with Captura !
              </h4>
            </div>

            <div
              className="catalogue-pictures"
              style={{ backgroundColor: "rgb(1, 3, 44 , 0.98)" }}
            >
              {pictureData.map((i) => (
                <RevealComponent>
                  <div  
                   key={i.id}
                    className="catalogue-picture"
                    onMouseEnter={() => handleOnMouseEnter(i)}
                    onMouseLeave={handleOnMouseLeave}
                    style={{ position: "relative" }}
                  >
                    <img
                      className="picures-format"
                     
                      src={i.img}
                    />
                     <p className={`slug ${imageIsHovered !== null && imageIsHovered ===i.id ? "slug-displayed special-title" : "slug-hidden"}`}>  {i.slug}</p>
                  </div>
                </RevealComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default HomeBlogSection;

import pictureData from "../data/pictures.json";
import RevealComponent from "../hooks/Reveal";
import { useState } from "react";

const HomeBlogSection = () => {
  const [imageIsHovered, setImageIsHovered] = useState<boolean | null>(null);

  const handleOnMouseEnter = (i) => {
    if (i.id) {
      setImageIsHovered(i.id);
    }
  };
  const handleOnMouseLeave = () => {
    setImageIsHovered(false);
  };

  return (
    <div className="SECTION">
      <h2 className="SECTION-title">Boost your Carrer!</h2>
        <div className="SECTION-content ">
          <div className="best-seller">
            {" "}
            <h4>
              Capture the Best Moments of the Year with Captura! Unlock the
              power of photography with our handpicked selection of the year's
              best cameras. From stunning landscapes to unforgettable portraits,
              these cameras have proven themselves as the go-to choice for both
              amateur and professional photographers. Discover the perfect tool
              to freeze time and create memories that last a lifetime.{" "}
            </h4>
            <div
              className="catalogue-pictures"
              style={{ backgroundColor: "rgb(1, 3, 44)" }}
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
                      className=""
                      style={{
                        height: "320px",
                        width: "100%",
                        marginBottom: "1rem",
                        border: "1px white solid",
                      }}
                      src={i.img}
                    />
                    <p
                      className={
                        imageIsHovered === i.id
                          ? "slug slug-displayed"
                          : "slug slug-hidden"
                      }
                    >
                      {" "}
                      {i.slug}{" "}
                    </p>
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

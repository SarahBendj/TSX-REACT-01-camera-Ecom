import StoreItemsData from "../data/items.json";
import { Card } from "react-bootstrap";
import RevealCompnenet from "../hooks/Reveal";


const HomeStoreSection = () => {
 
  const NewArrayOfBestSeller = StoreItemsData.slice(5, 10);

  return (
    <div className="SECTION">
      {" "}
      <h2 className="SECTION-title">Top-Selling Cameras!</h2>
      <div className="SECTION-content">
      <div className="best-seller"> <h4>
        Capture the Best Moments of the Year with Captura!
        Unlock the power of photography with our handpicked selection of the
        year's best cameras. From stunning landscapes to unforgettable
        portraits, these cameras have proven themselves as the go-to choice for
        both amateur and professional photographers. Discover the perfect tool
        to freeze time and create memories that last a lifetime.
        </h4></div>
      <div className="best-seller-items">
      {NewArrayOfBestSeller.map((item) => (
        <Card id={item.id} className="">
          <RevealCompnenet>
            <Card.Img
              variant="top "
              src={item.img}
              height="250px"
              style={{ objectFit: "cover" }}
            />
          </RevealCompnenet>
          <Card.Body className=" d-flex flex-column">
            <RevealCompnenet>
              {" "}
              <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                <RevealCompnenet>
                  {" "}
                  <span className="fs-2">{item.name}</span>{" "}
                </RevealCompnenet>
                <RevealCompnenet>
                  {" "}
                  <span className="ms-2"> {item.price} $ </span>{" "}
                </RevealCompnenet>
              </Card.Title>{" "}
            </RevealCompnenet>
            <RevealCompnenet>
              {" "}
              <div className="d-flex justify-content-space-between align-items-center">
                {" "}
              </div>{" "}
            </RevealCompnenet>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
    </div>
  );
};

export default HomeStoreSection;

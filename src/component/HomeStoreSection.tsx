import StoreItemsData from "../data/items.json";
import { StoreItemProps } from "./StoreItem";
import { Card, Button } from "react-bootstrap";
import RevealCompnenet from "../hooks/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRef ,RefObject} from "react";
import { UseShoppingContext } from '../Context/UseShoppingContext';
import useNotification from "../hooks/Notification";
import React from "react";

//*TYPES
type ScrollProps = {
  delay  :number
  scrollAmount :number
  step : number
 };


const HomeStoreSection = () => {
 
  const { increaseItemsQuantity } = UseShoppingContext();
  //*INFROM THE CLIENT OF THE TRANSACTION
  const { showSuccess } = useNotification();
  //* SETTINGS 
  const NewArrayOfBestSeller = StoreItemsData.slice(6, 15);
  const elementRef: RefObject<HTMLDivElement> = useRef(null);
  
  const scrollToTheLeft = ({ delay = 10, scrollAmount = 50, step = 3 }: ScrollProps): void=> {
    const scrolling = () => {
      if(elementRef.current){
      elementRef.current.scrollLeft -= scrollAmount;
      if (elementRef.current.scrollLeft > 0) {
        const screenWidth = window.innerWidth;

        step = screenWidth > 600 ? 3 : 5;
        scrollAmount -= step; 
        if (scrollAmount < 0) {
          scrollAmount = 0;
        }
        setTimeout(scrolling, delay);
      }
    }
    };
    scrolling();
  };

  const scrollToTheRight = ({ delay = 10, scrollAmount = 50, step = 3 }): void => {
    const scrolling = () => {
      if (elementRef.current) {
        elementRef.current.scrollLeft += scrollAmount;
  
        const canScroll =
          elementRef.current.scrollLeft <
          elementRef.current.scrollWidth - elementRef.current.clientWidth;
  
        if (canScroll) {
          scrollAmount -= step;
          const screenWidth = window.innerWidth;
          step = screenWidth > 600 ? 3 : 5;
  
          if (scrollAmount < 0) {
            scrollAmount = 0;
          }
  
          setTimeout(scrolling, delay);
        }
      }
    };
  
    scrolling();
  };
  
  const handleLeftScroll =() : void => {

    const scrollProps: ScrollProps = { delay: 10, scrollAmount: 50, step: 3 };
    scrollToTheLeft(scrollProps);
  }
  const handleRightScroll =() : void => {

    const scrollProps: ScrollProps = { delay: 10, scrollAmount: 50, step: 3 };
    scrollToTheRight(scrollProps);
  }


  return (
    <div className="SECTION">
      {" "}
      <h2 className="SECTION-title">Top-Selling Cameras!</h2>
      <div className="SECTION-content">
        <div className="best-seller">
          {" "}
          <div className="hidden-mobile">
          <h4>
            Capture the Best Moments of the Year with Captura! Unlock the power
            of photography with our handpicked selection of the year's best
            cameras. From stunning landscapes to unforgettable portraits, these
            cameras have proven themselves as the go-to choice for both amateur
            and professional photographers. Discover the perfect tool to freeze
            time and create memories that last a lifetime.
          </h4>
          </div>
          <div className="show-mobile">
            <h4  style={{ marginBottom: '2rem'}}>
            Unlock the power
            of photography with our handpicked selection of the year's best
            cameras.
              </h4>
            </div>
        </div>
        <div className="best-seller-items">
          <Button className="bg-transparent border-0" onClick={handleLeftScroll}>
            {" "}
            <FontAwesomeIcon className="arrow-scroll" icon={faArrowLeft} />{" "}
          </Button>
          <div ref={elementRef} className="best-seller-scroll">
            {NewArrayOfBestSeller.map((item : StoreItemProps) => (
              <Card key={item.id} 
              style={{ minWidth: "200px" }}>
                <RevealCompnenet>
                  <Card.Img
                    variant="top "
                    src={item.img}
                    height="200px"
                    style={{ objectFit: "cover" }}
                  />  <Button  onClick={ ()=> {
                     increaseItemsQuantity(item.id)  
                    showSuccess(`Model ${item.name} has been successfully added to your cart `)
                  }}

                   className='bg-transparent border-0 hovered' 
                   style={{ color : 'rgb(15, 15, 144)'  ,
                    padding: '-1rem' ,scale:'1.5'}}>
                      <FontAwesomeIcon  icon={faShoppingCart} />
                      </Button>
                </RevealCompnenet>
                <Card.Body className=" d-flex flex-column">
                  <RevealCompnenet>
                    {" "}
                    <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                      <RevealCompnenet>
                        {" "}
                        <span className='fs-4'  >{item.name}</span>{" "}
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

          <Button
            className="bg-transparent border-0"
            onClick={handleRightScroll}
          >
            {" "}
            <FontAwesomeIcon
              className="arrow-scroll"
              icon={faArrowRight}
            />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeStoreSection;

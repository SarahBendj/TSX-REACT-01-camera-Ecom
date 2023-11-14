import { Offcanvas, Button, Stack, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UseShoppingContext } from "../Context/UseShoppingContext";
import { StoreItemProps } from "./StoreItem";
import { Link } from "react-router-dom";
import React, { useState } from "react";

type SlideBasketProps = {
  isBasketShowed: boolean;
  handleSlideBasketCLOSE: () => void;
};


const SlideBasket = ({
  isBasketShowed,
  handleSlideBasketCLOSE,
}: SlideBasketProps) => {
  const {
    selectedItemsToBuy,
    amountToPay,
    removeItems,
    getItemQuantity,
    increaseItemsQuantity,
    decreaseItemsQuantity,
  } = UseShoppingContext();
 
  const [isPlusHovered, setIsPlusHovered] = useState<boolean>(false);
  const [isMinusHovered, setIsMinusHovered] = useState<boolean>(false);

  //* Plus ************************/
  const handleMouseEnterPlusButton = () => {
    setIsPlusHovered(true);
    setIsMinusHovered(false);
  };

  const handleMouseLeavePlusButton = () => {
    setIsPlusHovered(false);
  };

  //* Minus *************************/
  const handleMouseEnterMinusButton = () => {
    setIsMinusHovered(true);
  };

  const handleMouseLeaveMinusButton = () => {
    setIsMinusHovered(false);
  };

  const buttonStylePlus = {
    backgroundColor: isPlusHovered ? "rgb(3,1,44)" : "",
    border: isPlusHovered ? "2px solid white" : "2px solid rgb(3,1,44)",
    color: isPlusHovered ? "white" : "rgb(3,1,44)",
    width: "30%",
    margin: "1rem",
  };
  const buttonStyleMinus = {
    backgroundColor: isMinusHovered ? "rgb(3,1,44)" : "",
    border: isMinusHovered ? "2px solid white" : "2px solid rgb(3,1,44)",
    color: isMinusHovered ? "white" : "rgb(3,1,44)",
    width: "30%",
    margin: "1rem",
  };
 

  return (
    <Offcanvas
      show={isBasketShowed}
      placement="end"
      className="d-flex direction-column"
    >
      <Button
        onClick={handleSlideBasketCLOSE}
        variant="bg-transparent"
        style={{
          width: "100%",
          color: "white",
          backgroundColor: "rgb(3,1,44)",
          borderRadius: "0",
          borderBottom: "4px solid #DAA520",
        }}
      >
        {" "}
        CLOSE X{" "}
      </Button>
      <Offcanvas.Header>
        <Offcanvas.Title>
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} color={"#DAA520"} /> Selected
          Items{" "}
          <strong>
            {" "}
            {selectedItemsToBuy.length > 0  ? `${amountToPay}$` : "No item yet" }
          </strong>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {selectedItemsToBuy.length > 0 &&
            selectedItemsToBuy.map((item: StoreItemProps) => (
              <Col style={{ scale: "0.8" }} key={item.id}>
                <Card
                  key={item.id}
                  className=" d-flex "
                  style={{ position: "relative" }}
                >
                  <Button
                    variant="warning"
                    className="remove-item-from-basket"
                    onClick={() => removeItems(item.id)}
                  >
                    {" "}
                    X
                  </Button>
                  <Card.Img
                    variant="top "
                    src={item.img}
                    height="18%"
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body className=" d-flex flex-column">
                    <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                      <span className="fs-2">{item.name}</span>
                      <span className="ms-2"> {item.price} $ </span>
                    </Card.Title>
                  </Card.Body>
                  <div className="d-flex ">
                    <div style={{ width: "100%" }}>
                      <Button
                        variant="bg-transparent"
                        style={buttonStylePlus}
                        onMouseEnter={handleMouseEnterPlusButton}
                        onMouseLeave={handleMouseLeavePlusButton}
                        onClick={() => increaseItemsQuantity(item.id)}
                      >
                        {" "}
                        +{" "}
                      </Button>
                      <Button
                        variant="bg-transparent"
                        style={buttonStyleMinus}
                        onMouseEnter={handleMouseEnterMinusButton}
                        onMouseLeave={handleMouseLeaveMinusButton}
                        onClick={() => decreaseItemsQuantity(item.id)}
                      >
                        {" "}
                        -{" "}
                      </Button>
                    </div>
                    <h6> ({getItemQuantity(item.id)} x) Items </h6>
                  </div>
                </Card>
              </Col>
            ))}
        </Stack>
      </Offcanvas.Body>

      {/* //*PAYEMENT */}
      <Link to={"/Payement"}>
        <Button
          onClick={() => {
            handleSlideBasketCLOSE();
           
          }}
          variant="bg-transparent"
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "rgb(3,1,44)",
            borderRadius: "0",
            borderTop: "4px solid #DAA520",
          }}
        >
          {" "}
          PAYEMENT{" "}
        </Button>
      </Link>
    </Offcanvas>
  );
};

export default SlideBasket;

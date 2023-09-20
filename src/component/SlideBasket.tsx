import { Offcanvas, Button, Stack, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UseShoppingContext } from "../Context/UseShoppingContext";
import { StoreItemProps } from "./StoreItem";
import StoreData from "../data/items.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type SlideBasketProps = {
  isBasketShowed: boolean;
  handleSlideBasketCLOSE: () => void;
};

const SlideBasket = ({
  isBasketShowed,
  handleSlideBasketCLOSE,
}: SlideBasketProps) => {
  const { cartItems, cartTotal } = UseShoppingContext();
  const [amountToPay, setAmountToPay] = useState<number>(0);
  console.log(cartItems, cartTotal);

  //*RETURNING ONLY SELECTED ITEMS
  const selectedItemsToBuy: StoreItemProps | null[] = StoreData.filter(
    (item: StoreItemProps) =>
      cartItems.some((cartItem) => cartItem.id === item.id)
  );

  useEffect(() => {
    const amountOfPricesToPay = () :void => {
      if (selectedItemsToBuy.length > 0) {
        const totalPrice :number[]= [];

        selectedItemsToBuy.forEach((i :StoreItemProps) => totalPrice.push(i.price));
     
        const sum: number = totalPrice.reduce((price, total) => price + total + 0);
        setAmountToPay(sum);
      }
     
    };
    amountOfPricesToPay()
  }, [cartItems , selectedItemsToBuy , setAmountToPay]);

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
          Items <strong> {amountToPay} $ </strong>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {selectedItemsToBuy.map((item: StoreItemProps) => (
            <Col style={{ scale: "0.8" }} key={item.id}>
              <Card key={item.id} className=" d-flex ">
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
              </Card>
            </Col>
          ))}
        </Stack>
      </Offcanvas.Body>

      {/* //*PAYEMENT */}
      <Link
        to={{
          pathname: `/Payement`,
          state: { selectedItems: selectedItemsToBuy },
        }}
      >
        <Button
          onClick={handleSlideBasketCLOSE}
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

import { useState, useCallback, MouseEvent, KeyboardEvent } from "react";
import { useShoppingContext } from "../Context/UseShoppingContext";
import { Button } from "react-bootstrap";


const Counter = ( {id }:number ) => {

  //*CONTEXT SHOPPING STARTS

  const {
    getItemQuantity,
    increaseItemsQuantity,
    decreaseItemsQuantity,
    removeItems,
  } = useShoppingContext();

  // const QUANTITY = removeItems();

  //* CONTEXT ENDED

  //* COMPO BEGINING

  const [counter, setCounter] = useState<number>(0);



  const increment = useCallback(
    ( 
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCounter((prev) => prev + 1);
     
    },
    []
  );
  const decrement = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      if (counter > 0) {
        setCounter((prev) => prev - 1);
      } else {
        setCounter(0);
      }
    },
    []
  );

  return (
    <div className="text-center">
      <div>{counter} in the Basket</div>
      <div className="d-flex justify-content-around">
        <Button className="bg-info border-0"  onClick={increment}>+</Button>
        <Button className="bg-info border-0"  onClick={decrement}>
          -
        </Button>
        <Button
          variant="warning"
          onClick={() => setCounter(0)}
          className="border-0"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter;

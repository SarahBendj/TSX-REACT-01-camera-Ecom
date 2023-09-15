import { useState, useCallback, MouseEvent, KeyboardEvent } from "react";
import { UseShoppingContext } from "../Context/UseShoppingContext";
import { Button } from "react-bootstrap";


const Counter = ( {id }:number ) => {

  //*CONTEXT SHOPPING STARTS

  const {
    getItemQuantity,
    increaseItemsQuantity,
    decreaseItemsQuantity,
    removeItems,
  } = UseShoppingContext();

  const quantity : number = getItemQuantity(id);

  return (
    <div className="text-center">
      <div>{quantity} in the Basket</div>
      <div className="d-flex justify-content-around">
        <Button className="bg-info border-0"  onClick={()=> {increaseItemsQuantity(id)}}>+</Button>
        <Button className="bg-info border-0"  onClick={()=> {decreaseItemsQuantity(id)}}> - </Button>
        <Button
          variant="warning"
          onClick={() => {removeItems(id)}}
          className="border-0"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter;

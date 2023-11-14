import { UseShoppingContext } from "../Context/UseShoppingContext";
import { Button } from "react-bootstrap";
import useNotification from "../hooks/Notification";
import React from "react";


type  CounterProps = {
  id: number;
  name: string;
}


const Counter = ( { id  , name} : CounterProps ) => {

  const { showSuccess } = useNotification()

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
        <Button  variant="transparent" className="btn-outline-dark" style={{ marginRight: '0.5rem'}}  onClick={()=> 
        {increaseItemsQuantity(id);
      showSuccess(`Model ${name} has been successfully added `)}}> + </Button>
        <Button  variant="transparent" className="btn-outline-dark" onClick={()=> {decreaseItemsQuantity(id)}}> - </Button>
        <Button
         
          variant="warning"
          onClick={() => {removeItems(id) ;  showSuccess(`Model ${name} has been successfully added `)}}
          className="border-0"
          style={{ marginLeft: '1rem'}}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Counter;

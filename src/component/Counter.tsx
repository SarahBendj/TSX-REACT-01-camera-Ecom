import { UseShoppingContext } from "../Context/UseShoppingContext";
import { Button } from "react-bootstrap";
import useNotification from "../hooks/Notification";
import { StoreItemProps } from './StoreItem';


const Counter = ( { id  , name} : StoreItemProps ) => {

  const { showSuccess } = useNotification()


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
        <Button className="bg-info border-0" style={{ marginRight: '0.5rem'}}  onClick={()=> 
        {increaseItemsQuantity(id);
      showSuccess(`Model ${name} has been successfully added `)}}> + </Button>
        <Button className="bg-info border-0"  onClick={()=> {decreaseItemsQuantity(id)}}> - </Button>
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

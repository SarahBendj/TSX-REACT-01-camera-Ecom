import { useContext, ReactNode, createContext, useState , useEffect } from "react";
import storeData from '../data/items.json';
import { StoreItemProps } from "../component/StoreItem";


//-DECLARE my TYPES
type ShoppingContextProps = {
  children: ReactNode;
};

type ShoppingContextLogic = {
  getItemQuantity: (id: number) => number;
  increaseItemsQuantity: (id: number) => void;
  decreaseItemsQuantity: (id: number) => void;
  removeItems: (id:number) => void;
  cartItems :CartItem[];
  cartTotal : number;
  selectedItemsToBuy : StoreItemProps[];
  amountToPay:number;
};
type CartItem = {
  id: number;
  quantity: number;
};


//- CREATE VAR THATS GONNA INTERFER IN MY CONTEXT
const ShoppingContext = createContext({} as ShoppingContextLogic);

//- SETTINGS => use my context
export const UseShoppingContext = () => {
  return useContext(ShoppingContext);
};


//- RETRUN MY FUNCTION  IN THIS SPECIFIC CONTEXT
export const ShoppingProvider = ({ children }: ShoppingContextProps) => {
  
  //************************STATES ********************/
  //*STATE THATS GONNA HANDLE EVERY OPTION OF TRANSACTION
const [cartItems, setCartItems] = useState<CartItem[]>([]);
const [amountToPay, setAmountToPay] = useState<number>(0);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const decreaseItemsQuantity = (id: number) => {
    if (cartItems.length > 0) {
      setCartItems((existingItems : CartItem[]) => {
       const updatedItems =  existingItems.map((item : CartItem) => {
          if (item.id === id) {
            return { ...item, quantity: Math.max(0 , item.quantity  -1)  };
          }
          return item
        });
        return updatedItems;
      });
      
    }
  };

  const increaseItemsQuantity = (id: number) => {
    setCartItems((existingItems : CartItem[]) => {
      if (existingItems.find((item) => item.id === id) == null) {
        return [...existingItems, { id, quantity: 1 }];
      } else {
        return existingItems.map((item: CartItem) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            item;
          }
        });
      }
    });
  };

  const removeItems = (id: number) => {
    setCartItems((existingItems: CartItem[]) => {
      const updatedItems = existingItems.filter((item: CartItem) => item.id !== id);
      return updatedItems;
    });
  };

 //*1)RETURNING NUMBER OF ITEMS & EVERY GROUP OF ITEMS 
  const cartTotal = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;


//*2) MATCHING THE SELECTED WITH THE EXISTING DATA
  const selectedItemsToBuy = storeData.filter((item: StoreItemProps) =>
  cartItems.some((cartItem) => cartItem.id === item.id)
);

//*3)RETURNING THE SUM OF PRICE TO PAY

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
    <ShoppingContext.Provider
      value={{
        getItemQuantity,
        removeItems,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        cartItems,
        cartTotal,
        selectedItemsToBuy,
        amountToPay,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
export default ShoppingContext;

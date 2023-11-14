import { useContext, ReactNode, createContext, useState , useEffect } from "react";
import storeData from '../data/items.json';
import { StoreItemProps } from "../component/StoreItem";
import useLocalStorage from "../hooks/useLocalStorage";
import React from 'react';


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
  setCartItems : (cartItem :CartItem[]) => void;
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
const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-item",[]);
const [selectedItemsToBuy, setSelectedItemsToBuy] = useState<StoreItemProps[]>([]);
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
    setCartItems((existingItems: CartItem[]) => {
      const itemIndex = existingItems.findIndex((item) => item.id === id);
  
      if (itemIndex === -1) {
        return [...existingItems, { id, quantity: 1 }];
      } else {
        const updatedItems = [...existingItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        return updatedItems;
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

 useEffect(() => {
  const filteredItems = storeData.filter((item: StoreItemProps) =>
    cartItems.some((cartItem) => cartItem.id === item.id)
  );

  setSelectedItemsToBuy(filteredItems);

}, [cartItems]);

//*3)RETURNING THE SUM OF PRICE TO PAY

useEffect(() => {
  const amountOfPricesToPay = (): void => {
    if (cartItems.length > 0) {
      const totalPrice: number[] = [];

      cartItems.forEach((cartItem: CartItem) => {
        const selectedItem = storeData.find((item) => item.id === cartItem.id);
        if (selectedItem) {
          totalPrice.push(selectedItem.price * cartItem.quantity);
        }
      });

      const sum: number = parseInt(totalPrice.reduce((price, total) => price + total, 0).toFixed(2),10);
      setAmountToPay(sum);
    } else {
      setAmountToPay(0);
    }
  };
  amountOfPricesToPay();
}, [cartItems]);



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
        setCartItems
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
export default ShoppingContext;
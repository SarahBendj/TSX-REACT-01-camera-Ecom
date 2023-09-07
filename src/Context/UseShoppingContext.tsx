import { useContext, ReactNode, createContext, useState } from "react";

//-DECLARE my TYPES
type ShoppingContextProps = {
  children: ReactNode;
};

type ShoppingContextLogic = {
  getItemQuantity: (id: number) => number;
  increaseItemsQuantity: (id: number) => void;
  decreaseItemsQuantity: (id: number) => void;
  removeItems: () => void;
};
type CartItem = {
  id: number;
  quantity: number;
};
//- CREATE VAR THATS GONNA INTERFER IN MY CONTEXT
const shoppingContext = createContext({} as ShoppingContextLogic);

//- SETTINGS => use my context
export const useShoppingContext = () => {
  return useContext(shoppingContext);
};

//- RETRUN MY FUNCTION  IN THIS SPECIFIC CONTEXT
export const shoppingProvider = ({ children }: ShoppingContextProps) => {
  //*STATE THATS GONNA HANDLE EVERY OPTION OF TRANSACTION
  const [cartItems, setCartsItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const decreaseItemsQuantity = (id: number) => {
    if (cartItems.length > 0) {
      setCartsItems((existingItems) => {
        existingItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
        });
      });
    }
  };

  const increaseItemsQuantity = (id: number) => {
    setCartsItems((existingItems) => {
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

  const removeItems = () => {
    if (cartItems.length > 0) {
      setCartsItems([]);
    }
  };

  return (
    <shoppingContext.Provider
      value={{
        getItemQuantity,
        removeItems,
        increaseItemsQuantity,
        decreaseItemsQuantity,
      }}
    >
      {children}
    </shoppingContext.Provider>
  );
};
export default shoppingContext;

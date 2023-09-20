import { useContext, ReactNode, createContext, useState } from "react";

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
  //*STATE THATS GONNA HANDLE EVERY OPTION OF TRANSACTION
const [cartItems, setCartItems] = useState<CartItem[]>([]);

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


  const cartTotal = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  


  return (
    <ShoppingContext.Provider
      value={{
        getItemQuantity,
        removeItems,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
export default ShoppingContext;

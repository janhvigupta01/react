import { createContext, useEffect, useState } from "react";
import { dummydata } from "../dummydata";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);

  const addItem = (id) => {
    const product = dummydata.find((item) => item.id === id);
    if (product) {
      setCartItem((prev) => [...prev, product]);
    }
  };

  const removeItem = (id) => {
    setCartItem(CartItem.filter((item) => item.id != id));
  };

  return (
    <AppContext.Provider value={{ addItem, removeItem, CartItem }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
export default AppContextProvider;

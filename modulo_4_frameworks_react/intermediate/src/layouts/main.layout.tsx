import { ShoppingCartContext } from "core/context/shopping-cart-context";
import React, { useContext } from "react";
import * as classes from "./main.layout.styles";

export const MainLayout: React.FC = ({ children }) => {
  const { isOpened } = useContext(ShoppingCartContext);
  return (
    <div className={`${classes.root} ${isOpened ? '' : 'without-cart'}`}>
      {children}
    </div>
  );
};

import { Header } from "common/components/header/header";
import { ShoppingCartComponent } from "common/components/shopping-cart/shopping-cart-component";
import { MainLayout } from "layouts/main.layout";
import React from "react";
import { ShoppingCartProvider } from "./core/context/shopping-cart-context";
import { RouterComponent } from "./core/router";
import { ThemeProviderComponent } from "./core/theme";

export const App = () => {
  return (
    <ThemeProviderComponent>
      <ShoppingCartProvider>
        <MainLayout>
          <RouterComponent />
          <ShoppingCartComponent />
        </MainLayout>
      </ShoppingCartProvider>
    </ThemeProviderComponent>
  );
};

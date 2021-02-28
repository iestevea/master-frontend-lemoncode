import { Button, IconButton, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ShoppingCartContext } from "core/context/shopping-cart-context";
import { getKitties, KittyApi } from "pods/kitties/api";
import { KittyVm } from "pods/kitties/kitties.vm";
import { PuppyApi, getPuppies } from "pods/puppies/api";
import { PuppyVm } from "pods/puppies/puppies.vm";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ShoppingCartItem } from "../shopping-cart-item/shopping-cart-item";
import * as classes from "./shopping-cart.styles";

export const ShoppingCartComponent: React.FC = () => {
  const { list, setList, isOpened, setIsOpened } = useContext(ShoppingCartContext);
  const [items, setItems] = useState<KittyVm[] | PuppyVm[]>([]);

  const allItems = useRef<KittyVm[] | PuppyVm[]>([]);

  useEffect(() => {
    const newList = allItems.current.filter((item: any) =>
      list.includes(item.id)
    );
    setItems(newList);
  }, [list]);

  const onLoad = async () => {
    const kittiesFromApi: KittyApi[] = await getKitties();
    const puppiesFromApi: PuppyApi[] = await getPuppies();
    const newKittiesList = kittiesFromApi.map((kitty: KittyApi) => ({
      ...kitty,
      selected: list.includes(kitty.id),
    }));
    const newPuppiesList = puppiesFromApi.map((puppy: PuppyApi) => ({
      ...puppy,
      selected: list.includes(puppy.id),
    }));
    allItems.current = [...newKittiesList, ...newPuppiesList];
  };

  useEffect(() => {
    onLoad();
  }, []);

  const deleteItem = (id: string) => {
    const newList = list.filter((item: string) => item !== id);
    setList(newList);
  };

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={`${classes.root} shopping-cart`}>
      <div className="shopping-cart_header">
        <IconButton color="primary" component="span" onClick={toggleOpen}>
          {isOpened ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
        </IconButton>
        {isOpened && (
          <>
            <ShoppingCartIcon fontSize="large" color="primary" />
            <Typography component="h1" color="textPrimary">
              Carrito de la compra
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="medium"
              onClick={() => setList([])}
            >
              Vaciar
            </Button>
          </>
        )}
      </div>
      {isOpened && (
        <div className="shopping-cart_list">
          {items.map((item) => (
            <ShoppingCartItem
              key={item.id}
              item={item}
              onDeleteItem={deleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

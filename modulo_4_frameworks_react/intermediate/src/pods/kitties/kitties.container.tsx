import { ShoppingCartContext } from "core/context/shopping-cart-context";
import React, { useContext, useEffect, useState } from "react";
import { getKitties, KittyApi } from "./api";
import { KittiesComponent } from "./kitties.component";
import { KittyVm } from "./kitties.vm";

export const KittiesContainer: React.FC = () => {
  const [kitties, setKitties] = useState<KittyVm[]>([]);
  const { list, setList } = useContext(ShoppingCartContext);

  const onLoadKitties = async () => {
    const kittiesFromApi: KittyApi[] = await getKitties();
    const newList = kittiesFromApi.map((kitty: KittyApi) => ({
      ...kitty,
      selected: list.includes(kitty.id),
    }));
    setKitties(newList);
  };

  const addKittyToCart = (id: string, checked: boolean) => {
    const newList = checked
      ? [...list, id]
      : list.filter((item: string) => item !== id);
    const listWithoutRepeatedItems = Array.from(new Set(newList));
    setList(listWithoutRepeatedItems);
  };

  useEffect(() => {
    onLoadKitties();
  }, []);

  useEffect(() => {
    const newList = kitties.map((puppy: KittyApi) => ({
      ...puppy,
      selected: list?.includes(puppy.id),
    }));
    console.log("from", newList);
    setKitties(newList);
  }, [list]);

  return (
    <KittiesComponent kitties={kitties} onKittySelected={addKittyToCart} />
  );
};

import { ShoppingCartContext } from "core/context/shopping-cart-context";
import React, { useContext, useEffect, useState } from "react";
import { getPuppies, PuppyApi } from "./api";
import { PuppiesComponent } from "./puppies.component";
import { PuppyVm } from "./puppies.vm";

export const PuppiesContainer: React.FC = () => {
  const [puppies, setPuppies] = useState<PuppyVm[]>([]);
  const { list, setList } = useContext(ShoppingCartContext);

  const onLoadPuppies = async () => {
    const puppiesFromApi: PuppyApi[] = await getPuppies();
    const newList = puppiesFromApi.map((puppy: PuppyApi) => ({
      ...puppy,
      selected: list.includes(puppy.id),
    }));
    setPuppies(newList);
  };

  const addPuppyToCart = (id: string, checked: boolean) => {
    const newList = checked
      ? [...list, id]
      : list.filter((item: string) => item !== id);
    const listWithoutRepeatedItems = Array.from(new Set(newList));
    setList(listWithoutRepeatedItems);
  };

  useEffect(() => {
    onLoadPuppies();
  }, []);

  useEffect(() => {
    const newList = puppies.map((puppy: PuppyApi) => ({
      ...puppy,
      selected: list?.includes(puppy.id),
    }));
    console.log("from", newList);
    setPuppies(newList);
  }, [list]);

  return (
    <PuppiesComponent puppies={puppies} onPuppySelected={addPuppyToCart} />
  );
};

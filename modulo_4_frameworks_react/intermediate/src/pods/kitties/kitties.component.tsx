import { AnimalCardComponent } from "common/components/animal-card/animal-card-component";
import React from "react";
import { KittyVm } from "./kitties.vm";
import * as classes from "./kitties.styles";

interface Props {
  kitties: KittyVm[];
  onKittySelected: (id: string, checked: boolean) => void;
}

export const KittiesComponent: React.FC<Props> = ({ kitties, onKittySelected }) => {
  return (
    <div className={classes.root}>
      {kitties.map((kitty: KittyVm) => (
        <AnimalCardComponent
          key={kitty.id}
          animal={kitty}
          onBuyAnimal={onKittySelected}
        />
      ))}
    </div>
  );
};

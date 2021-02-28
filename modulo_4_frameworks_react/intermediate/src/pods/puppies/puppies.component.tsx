import { AnimalCardComponent } from "common/components/animal-card/animal-card-component";
import React from "react";
import { PuppyVm } from "./puppies.vm";
import * as classes from "./puppies.styles";

interface Props {
  puppies: PuppyVm[];
  onPuppySelected: (id: string, checked: boolean) => void;
}

export const PuppiesComponent: React.FC<Props> = ({ puppies, onPuppySelected }) => {
  return (
    <div className={classes.root}>
      {puppies.map((puppy: PuppyVm) => (
        <AnimalCardComponent
          key={puppy.id}
          animal={puppy}
          onBuyAnimal={onPuppySelected}
        />
      ))}
    </div>
  );
};

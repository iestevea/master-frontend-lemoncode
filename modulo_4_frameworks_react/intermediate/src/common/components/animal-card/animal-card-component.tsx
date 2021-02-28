import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { PuppyVm } from "pods/puppies/puppies.vm";
import React, { useEffect, useState } from "react";
import * as classes from "./animal-card.styles";

interface Props {
  animal: PuppyVm;
  onBuyAnimal: (id: string, checked: boolean) => void;
}

export const AnimalCardComponent: React.FC<Props> = ({
  animal,
  onBuyAnimal
}) => {

  return (
    <div className={`${classes.root} ${animal.selected ? "selected" : ""}`}>
      <img src={animal.pictureUrl} />
      <div className="content">
        <Typography component="h2" variant="subtitle1" color="textPrimary">
          Nombre: {animal.title}
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              name="buy"
              color="primary"
              checked={animal.selected}
              onChange={(event: any, checked: boolean) => onBuyAnimal(animal.id, checked)}
            />
          }
          label="Añadir al carrito"
        />
      </div>
    </div>
  );
};

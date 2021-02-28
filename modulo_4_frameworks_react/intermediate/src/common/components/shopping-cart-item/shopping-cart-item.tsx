import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@material-ui/core";
import { PuppyVm } from "pods/puppies/puppies.vm";
import React, { useEffect, useState } from "react";
import * as classes from "./shopping-cart-item.styles";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  item: any;
  onDeleteItem: (id: string) => void;
}

export const ShoppingCartItem: React.FC<Props> = ({ item, onDeleteItem }) => {
  return (
    <div className={classes.root}>
      <img src={item.pictureUrl} />
      <div className="content">
        <Typography component="h2" variant="subtitle1" color="textPrimary">
          Nombre: {item.title}
        </Typography>
        <IconButton
          color="primary"
          aria-label="delete"
          component="span"
          onClick={() => onDeleteItem(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

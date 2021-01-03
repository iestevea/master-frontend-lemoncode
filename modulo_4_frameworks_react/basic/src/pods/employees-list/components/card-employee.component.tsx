import React from "react";
import {
  Button,
  TextField,
  ListItemAvatar,
  ListItem,
  List,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { routes } from "../../../core/router";
import { EmployeeVm } from "../employees-list.vm";

interface Props {
  employee: EmployeeVm;
}

export const CardEmployeeComponent: React.FC<Props> = ({ employee }) => {
  return (
    <div key={employee.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={employee.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary="Información del usuario"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="subtitle2"
                color="textPrimary"
              >
                Nombre: {employee.name}
              </Typography>
            </React.Fragment>
          }
        />
        <Button
          color="primary"
          size="medium"
          href={routes.detailEmployee(employee.id)}
        >
          Ir a detalle
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
};

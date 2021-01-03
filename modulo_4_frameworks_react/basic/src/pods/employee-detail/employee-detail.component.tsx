import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { theme } from "../../core/theme";
import { EmployeeVm } from "./employee-detail.vm";

interface Props {
  employee: EmployeeVm;
}

export const EmployeeDetailComponent: React.FC<Props> = ({ employee }) => {
  const history = useHistory();
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              style={{ width: theme.spacing(7), height: theme.spacing(7) }}
              src={employee.img}
            />
          }
          title={
            <React.Fragment>
              <Typography gutterBottom variant="h5" component="h2">
                {employee.name}
              </Typography>
            </React.Fragment>
          }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Biografía: {employee.bio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Compañia: {employee.company}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(routes.employees)}
        >
          Volver
        </Button>
      </CardActions>
    </Card>
  );
};

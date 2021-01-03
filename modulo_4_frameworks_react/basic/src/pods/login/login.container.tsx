import { IconButton, Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../../core/router";
import { LoginComponent } from "./login.component";
import { Login } from "./login.vm";
import CloseIcon from "@material-ui/icons/Close";

export const LoginContainer: React.FC = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const handleLogin = (login: Login) => {
    if (login.username === "admin" && login.password === "test") {
      history.push(routes.employees);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <LoginComponent onLogin={handleLogin} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Incorrect username or password"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

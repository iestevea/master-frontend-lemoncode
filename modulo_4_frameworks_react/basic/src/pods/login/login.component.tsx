import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import * as classes from "./login.styles";
import { createEmptyLogin, Login } from "./login.vm";

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FC<Props> = ({ onLogin }) => {
  const [login, setLogin] = useState<Login>(createEmptyLogin());

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(login);
        }}
      >
        <div className={classes.root}>
          <TextField
            label="Username"
            required
            variant="outlined"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <TextField
            label="Password"
            required
            variant="outlined"
            type="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

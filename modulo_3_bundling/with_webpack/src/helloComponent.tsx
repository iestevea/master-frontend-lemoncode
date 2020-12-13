import React from "react";
import logo from "Content/logo_1.png";
import classes from "./helloComponentStyles.scss";

export const HelloComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    const defaultName: string = "Iciar";
    setName(defaultName);
  }, []);

  return (
    <>
      <img src={logo} />
      <div className={classes["hello-wrapper"]}>
        <h1>{`Hello world with react from ${name} :) `}!</h1>
      </div>
    </>
  );
};

import { Header } from "common/components/header/header";
import React from "react";
import { PuppiesContainer } from "../pods/puppies/puppies.container";

export const PuppiesScene: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <PuppiesContainer />
      </div>
    </>
  );
};

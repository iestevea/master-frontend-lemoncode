import { Header } from "common/components/header/header";
import { KittiesContainer } from "pods/kitties/kitties.container";
import React from "react";

export const KittiesScene: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <KittiesContainer />
      </div>
    </>
  );
};

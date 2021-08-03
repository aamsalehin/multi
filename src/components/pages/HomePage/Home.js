import React from "react";
import InfoSection from "../../InfoSection/InfoSection";
import { homeObj, homeObjTwo, homeObjThree } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObj} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;

import React from "react";
import CoreValues from "./CoreValues";
import LandingPage from "./LandingPage";
import Partners from "./Partners";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <CoreValues />
      <OurServices />
      <Partners />
    </div>
  );
};

export default Home;

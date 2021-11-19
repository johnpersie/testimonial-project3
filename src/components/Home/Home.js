import React from "react";
import LandingPage from "./LandingPage";
import Partners from "./Partners";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <AboutUs />
      <OurServices />
      <Partners />
    </div>
  );
};

export default Home;

import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Connection from "./Connection/Connection";
import ContactUs from "./ContactUs/ContactUs";
import HomeBanner from "./HomeBanner/HomeBanner";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <br />
      <Connection></Connection>
      <br />
      <Statistics></Statistics>
      <br />
      <AboutUs></AboutUs>
      <br />
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

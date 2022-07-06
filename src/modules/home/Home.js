import React from "react";
import Navbar from "../../components/Navbar";
import HomeView from "./view/HomeView";

const Home = () => {
  return (
    <div>
      <Navbar child = {<HomeView/>}/>
    </div>
  );
};

export default Home;

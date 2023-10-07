import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import Slider from "./Slider";
import RightSidebar from "../shared/RightSidebar/RightSidebar";
import LeftSidebar from "../shared/LeftSidebar/LeftSidebar";

function Home() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Navbar></Navbar>
      <div className="font-poppins font-bold grid grid-cols-1 md:grid-cols-4">
        <div>
          <LeftSidebar></LeftSidebar>
        </div>
        <div className=" md:col-span-2"></div>
        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
}

export default Home;

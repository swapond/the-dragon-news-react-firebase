import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="font-poppins font-bold">Home</div>
    </div>
  );
}

export default Home;

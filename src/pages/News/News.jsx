import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import { useParams } from "react-router-dom";

function News() {
  const { id } = useParams();
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      {id}
    </>
  );
}

export default News;

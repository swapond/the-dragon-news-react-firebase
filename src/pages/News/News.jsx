import React from "react";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

function News() {
  const { id } = useParams();
  const data = useLoaderData();
  const currentNews = data.filter((currentData) => currentData._id === id);
  console.log(currentNews);
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <NewsCard currentNews={currentNews}></NewsCard>
    </>
  );
}

export default News;

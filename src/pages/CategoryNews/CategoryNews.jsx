import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import Slider from "../Home/Slider";
import LeftSidebar from "../shared/LeftSidebar/LeftSidebar";
import NewsContainer from "../Home/NewsContainer";
import RightSidebar from "../shared/RightSidebar/RightSidebar";
import NewsCard from "../Home/NewsCard";

function CategoryNews() {
  const { categoryId } = useParams();
  const [newsItems, setNewsItems] = useState([]);
  const data = useLoaderData();

  console.log(categoryId);

  useEffect(() => {
    if (categoryId === "0") {
      // Display all news items
      setNewsItems(data);
    } else {
      // Filter news items that match the category ID
      const filteredNews = data.filter(
        (item) => item.category_id === categoryId
      );
      setNewsItems(filteredNews);
    }
  }, [categoryId, data]);

  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Navbar></Navbar>
      <div className="font-poppins font-bold grid grid-cols-1 md:grid-cols-4">
        <div>
          <LeftSidebar></LeftSidebar>
        </div>
        <div className=" md:col-span-2">
          <>
            {newsItems.map((uniqueNews) => (
              <NewsCard key={uniqueNews._id} news={uniqueNews}></NewsCard>
            ))}
          </>
        </div>
        <div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
}

export default CategoryNews;

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useLoaderData } from "react-router-dom";

function NewsContainer() {
  const data = useLoaderData();
  const [news, setNews] = useState(data);

  return (
    <>
      {news.map((uniqueNews) => (
        <NewsCard key={uniqueNews._id} news={uniqueNews}></NewsCard>
      ))}
    </>
  );
}

export default NewsContainer;

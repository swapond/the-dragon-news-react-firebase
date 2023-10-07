import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

function LeftSidebar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl">Categories</h2>
      <ul className="flex flex-col">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.name}`}>
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default LeftSidebar;

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

function NewsCard({ currentNews }) {
  const { image_url, title, details } = currentNews[0];

  return (
    <div className="px-4">
      <div className="max-h-[768px] max-w-full w-[calc(100%+48px)] overflow-scroll">
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src={image_url}
            />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="font-normal">
            {details}
          </Typography>
        </div>
      </div>

      {/* Author Info */}
    </div>
  );
}

export default NewsCard;

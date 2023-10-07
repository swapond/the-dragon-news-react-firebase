import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NewsCard({ news }) {
  const { thumbnail_url, title, details, author, _id } = news;
  const shortTitle = title.slice(0, 52);

  const formatDate = (inputDate) => {
    const options = { month: "long", day: "numeric" };
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img className="w-full h-[180px] object-cover" src={thumbnail_url} />
        </CardHeader>
        <CardBody>
          <Link to={`/news/${_id}`}>
            <Typography title={title} variant="h4" color="blue-gray">
              {shortTitle}...
            </Typography>
          </Link>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {`${details.slice(0, 100)}...`}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content={author.name}>
              <Avatar
                size="sm"
                variant="circular"
                alt={author.name}
                src={author.img}
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">
            {formatDate(author.published_date)}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default NewsCard;

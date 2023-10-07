import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: () => fetch("/data/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/data/news.json"),
      },
    ],
  },
]);

export default router;

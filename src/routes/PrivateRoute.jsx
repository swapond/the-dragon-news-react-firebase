import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  //   Redirect user that news they want to read after login
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
}

export default PrivateRoute;

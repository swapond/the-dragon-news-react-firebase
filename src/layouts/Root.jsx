import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="mx-auto  max-w-6xl">
      <Outlet></Outlet>
    </div>
  );
}

export default Root;

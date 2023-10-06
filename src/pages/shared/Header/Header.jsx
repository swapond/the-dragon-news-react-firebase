import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

function Header() {
  return (
    <div className="flex flex-col">
      <img src={logo} />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
}

export default Header;

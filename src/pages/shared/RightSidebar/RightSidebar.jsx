import React from "react";
import { FaGoogle, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";

function RightSidebar() {
  return (
    <div>
      <div>
        <h2 className="text-3xl">Login With</h2>
        <div className="flex flex-col">
          <button className="btn btn-outline btn-primary space-y-3">
            <FaGoogle></FaGoogle> Login with Google
          </button>
          <button className="btn btn-outline btn-primary">
            <FaGithub></FaGithub> Login with Github
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-3xl">Find us</h2>
        <div className="flex flex-col">
          <a className="flex items-center gap-1" href="">
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a className="flex items-center gap-1" href="">
            <FaYoutube></FaYoutube> YouTube
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;

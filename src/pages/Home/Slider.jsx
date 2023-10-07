import React from "react";
import Marquee from "react-fast-marquee";

function Slider() {
  return (
    <div className="flex">
      <button className="btn btn-primary rounded-none">Breaking News</button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}

export default Slider;

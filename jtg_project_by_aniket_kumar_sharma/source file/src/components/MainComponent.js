import React from "react";
import Slider from "./SliderComponent";
import LifeStyle from "./LifeStyleComponent";
import CustomerNews from "./CustomerNewsComponent";
import Media from "./MediaComponent";
function Main() {
  return (
    <div className="main">
      <div className="container">
        <Slider />
        <LifeStyle />
        <CustomerNews />
        <Media />
      </div>
    </div>
  );
}
export default Main;

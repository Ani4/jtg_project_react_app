import React from "react";
import Slider from "./SliderComponent";
import LifeStyle from "./LifeStyleComponent";
import CustomerNews from "./CustomerNewsComponent";
function Main() {
  return (
    <div className="main">
      <div className="container">
        <Slider />
        <LifeStyle />
        <CustomerNews />
      </div>
    </div>
  );
}
export default Main;

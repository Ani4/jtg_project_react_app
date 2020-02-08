import React from "react";

function Resources(props) {
  let put = [];
  for (let i = 0; i < 4; i++) {
    put.push(
      <div
        className="media-container-item"
        onClick={() => console.log("helll")}
      >
        <img src={props.source[1]} alt="" />
      </div>
    );
  }
  return (
    <div className="media-block">
      <p className="heading">MEDIA RESOURCES - {props.source[0]}</p>
      <div className="media-block-gallery">{put}</div>
      <div className="media-block-content">
        Cusantium doloremque laudantium, totam rem aperiam, eaque ipsa Gusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab il quae ab
        lo inventore veritatis et quasi architecto beataevitae dicta sunt
        explicabo enim ipsam voluptatem aia{" "}
        <span className="green-word">continue reading</span>
      </div>
    </div>
  );
}
export default function() {
  return (
    <div className=" container-container wrapper media ">
      <Resources source={["PHOTOS", "/assets/images/photo-thumbnail.png"]} />
      <Resources source={["VIDEOS", "/assets/images/video-thumbnail.png"]} />
    </div>
  );
}

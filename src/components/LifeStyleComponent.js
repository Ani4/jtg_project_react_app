/* eslint-disable jsx-a11y/alt-text */
import React from "react";
function Block(props) {
  return (
    <div className="wrapper-inner-right-block">
      <p className="wrapper-inner-right-block-header">{props.header}</p>
      <div key={props.i} className="wrapper-inner-right-block-inner">
        <img src={`/assets/images/lifestyle_thmb_img0${props.i}.png`} />
        <p className="wrapper-inner-right-block-title-inner">{props.titleI}</p>
        <p className="wrapper-inner-right-block-content-inner">
          {props.contentI}
        </p>
      </div>
      <div key={props.j} className="wrapper-inner-right-block">
        <img src={`/assets/images/lifestyle_thmb_img0${props.j}.png`} />
        <p className="wrapper-inner-right-block-title-inner">{props.titleJ}</p>
        <p className="wrapper-inner-right-block-content-inner">
          {props.contentJ}
        </p>
      </div>
    </div>
  );
}
export default function LifeStyle(props) {
  return (
    <div className="lifestyle ">
      <div className="wrapper">
        <p className="heading">THE CONNECTED LIFESTYLE</p>
        <div className="wrapper-inner">
          <div className="wrapper-inner-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremaue laudantium,totam rem aperiam, eaque ipse. ro
            Numquameius modi tempora incidunt ut labore et. dolore magnam
            aliquam quaerat voluptatem. Ut enim ad mina veniam, aus nosexercato
            TS nemullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel euiureprehenderit qui in ea
            voluptate vellt esse quam rihil molestiae consequatur
            <button>
              LEARN MORE <img src="/assets/images/arrow.png" />
            </button>
          </div>
          <div className="wrapper-inner-right">
            <Block
              header={"LOREM IPSUM"}
              i={1}
              titleI={"CONNECT"}
              contentI={
                "Sdolordoloremaue of sece ndolemque dolo Edolo aemqueofdol doloremque services"
              }
              j={2}
              titleJ={"EXPERIENCE"}
              contentJ={
                "Saremaue, aemauexy netwdolore redolore Holorquey sdoloredol cremque & foremaue connectivity dolore doloremaue"
              }
            />
            <Block
              header={"LOREM IPSUM DOLOR"}
              i={3}
              titleI={"DISCOVER"}
              contentI={`Sdolordoloremaue of sece ndolemque dolo 
                
              Edolo aemqueofdol doloremque services`}
              j={4}
              titleJ={"GROW"}
              contentJ={`Sdolordoloremaue of sece ndolemque dolo 
              
              Edolo aemqueofdol doloremque services`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

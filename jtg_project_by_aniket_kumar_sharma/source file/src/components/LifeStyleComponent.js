/* eslint-disable jsx-a11y/alt-text */
import React from "react";
function Block(props) {
  return (
    <div className="wrapper-inner-right">
      <div className="wrapper-inner-right-block ">
        <p className="wrapper-inner-right-block-header">{props.header1}</p>
        <div className="wrapper-inner-right-block-main">
          <div key={props.i} className="wrapper-inner-right-block-main-inner">
            <img src={`/assets/images/lifestyle_thmb_img0${props.i}.png`} />
            <p className="wrapper-inner-right-block-main-inner-title">
              {props.titleI}
            </p>
            <p className="wrapper-inner-right-block-main-inner-content">
              {props.contentI}
            </p>
          </div>
          <div key={props.j} className="wrapper-inner-right-block-main-inner">
            <img src={`/assets/images/lifestyle_thmb_img0${props.j}.png`} />
            <p className="wrapper-inner-right-block-main-inner-title">
              {props.titleJ}
            </p>
            <p className="wrapper-inner-right-block-main-inner-content">
              {props.contentJ}
            </p>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="wrapper-inner-right-block ">
        <p className="wrapper-inner-right-block-header">{props.header2}</p>
        <div className="wrapper-inner-right-block-main">
          <div key={props.k} className="wrapper-inner-right-block-main-inner">
            <img src={`/assets/images/lifestyle_thmb_img0${props.k}.png`} />
            <p className="wrapper-inner-right-block-main-inner-title">
              {props.titleI}
            </p>
            <p className="wrapper-inner-right-block-main-inner-content">
              {props.contentI}
            </p>
          </div>
          <div key={props.l} className="wrapper-inner-right-block-main-inner">
            <img src={`/assets/images/lifestyle_thmb_img0${props.l}.png`} />
            <p className="wrapper-inner-right-block-main-inner-title">
              {props.titleJ}
            </p>
            <p className="wrapper-inner-right-block-main-inner-content">
              {props.contentJ}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function LifeStyle(props) {
  return (
    <div className="lifestyle container-container ">
      <div className="wrapper">
        <p className="heading">THE CONNECTED LIFESTYLE</p>
        <div className="wrapper-inner">
          <div className="wrapper-inner-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremaue laudantium,totam rem aperiam, eaque ipse.
            <br />
            <br />
            Numquameius modi tempora incidunt ut labore et. dolore magnam
            aliquam quaerat voluptatem. Ut enim ad mina veniam, aus nosexercato
            TS nemullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel euiureprehenderit qui in ea
            voluptate vellt esse quam rihil molestiae consequatur
            <button>
              LEARN MORE <img src="/assets/images/arrow.png" />
            </button>
          </div>

          <Block
            header1={"LOREM IPSUM"}
            i={1}
            titleI={"CONNECT"}
            contentI={
              "Sdolo rdolor emaue of sece ndole mque dolo Edolo aemqu eofdol doloremque services"
            }
            j={2}
            titleJ={"EXPERIENCE"}
            contentJ={
              "Saremaue, aemauexy netwdo lore redolore Holorquey sdolo redol cremque & foremaue connectivity dolore doloremaue"
            }
            header2={"LOREM IPSUM DOLOR"}
            k={3}
            titlek={"DISCOVER"}
            contentk={`Sdolordoloremaue of sece ndolemque dolo 
                
              Edolo aemqueofdol doloremque services`}
            l={4}
            titlel={"GROW"}
            contentl={`Sdolordoloremaue of sece ndolemque dolo 
              
              Edolo aemqueofdol doloremque services`}
          />
        </div>
      </div>
    </div>
  );
}

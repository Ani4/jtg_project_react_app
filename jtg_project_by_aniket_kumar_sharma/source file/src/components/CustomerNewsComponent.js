import React from "react";
function DisplayCard(props) {
  return props.imgs.map(e => <img src={`/assets/images/${e}`} alt="" />);
}

function Customer() {
  return (
    <div className="customer">
      <p className="heading">OUR CUSTOMERS</p>
      <div className="customer-detail mt">
        Unde omnis iste natus error sit voluptatem accusantium
        doloremauelaudantium, totam rem aperiam, aque Lorem ipsum dolor it amet,
        consectetur adipis ipsa quaeab ilo inventore veritatis etquasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam July 1,201
        voluptatem quia voluptas sit aspematur aut odit aut fugit.sed quia
        consequuntur.&nbsp; <span className="green-word">&nbsp;learn more</span>
      </div>
      <div className="customer-card">
        <DisplayCard
          imgs={[
            "custmr_logo01.png",
            "custmr_logo02.png",
            "custmr_logo03.png",
            "custmr_logo04.png",
            "custmr_logo05.png",
            "custmr_logo06.png"
          ]}
        />
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="news">
      <div className="heading">IN THE NEWS</div>
      <div className="news-articles mt">
        <p className="news-articles-title green-bold">
          Lorem ipsum dolorsit amet, consectetur adipis
        </p>
        <p className="news-articles-date">July 1, 2011</p>
        <p className="news-articles-detail">
          Corem ipsum dolorsit amet, consectetur adipis, totam rem aperiam,
          eaque ipsa quae ab ilo inventorveritatis et quasi archi tecto beatae
          vitaedicta sunt explicabo enim ipsamvoluptatequia voluptas sit sper...{" "}
          <span className="green-word">&nbsp; continue reading</span>
        </p>
      </div>

      <div className="news-articles mt">
        <p className="news-articles-title green-bold">
          Corem ipsum dolorsit amet, consectetur adipis
        </p>
        <p className="news-articles-date">June 30, 2011</p>
        <p className="news-articles-detail">
          Corem ipsum dolorsit amet, consectetur adipis, totam rem aperiam, aque
          ipsa quae ab illo inventoreveritatis et quasi architecto beataevitae
          dicta sunt explicabo enim psam voluptatem quia voluptas sit asper...{" "}
          <span className="green-word">&nbsp; continue reading</span>
        </p>
      </div>
    </div>
  );
}
export default function() {
  return (
    <div className="customer-news-wrapper">
      <Customer />
      <News />
    </div>
  );
}

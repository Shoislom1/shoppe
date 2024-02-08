import React from "react";
import "./ShoutCaps.css";

const ShoutCups = () => {
  return (
    <div className="ShoutCups">
      <a className="shout" style={{ animation: "duration 40s" }} href="#tel">
        <div className="Shout-row">
          <img src="/phone.png" alt="" />
          <h5>SmartFonlar va telefonlar</h5>
        </div>
      </a>
      <a href="#p">
        <div className="Shout-row">
          <img src="/issiq.png" alt="" />
          <h5>Isidgichlar</h5>
        </div>
      </a>
      <a href="#monitor">
        <div className="Shout-row">
          <img src="/noutbook.png" alt="" />
          <h5>Noutbuklar </h5>
        </div>
      </a>
      <a href="#monitor">
        <div className="Shout-row">
          <img src="/televizor.png" alt="" />
          <h5>Televizorlar</h5>
        </div>
      </a>
      <a href="#col">
        <div className="Shout-row">
          <img src="/yandex.png" alt="" />
          <h5>Kolonka</h5>
        </div>
      </a>
      <a href="#kol">
        <div className="Shout-row">
          <img src="/xolo.png" alt="" />
          <h5>Xolodilnik</h5>
        </div>
      </a>
    </div>
  );
};

export default ShoutCups;

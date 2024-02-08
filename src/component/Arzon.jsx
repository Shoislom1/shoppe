import React, { useState } from "react";
import Card from "./Card";
import "./Arzon.css";
const Arzon = ({ data, onViewCard }) => {
  const onClickArzon = (obj) => {
    onViewCard(obj);
  };
  const [openSkidka, setOPenSkidka] = useState(false);
  return (
    <div className="Arzon">
      <h2>Arzon Narxlar</h2>
      <div className="cards">
        {openSkidka == false
          ? data.slice(0, 15).map((item) =>
              item.skidka == true ? (
                <>
                  <Card
                    Images={item.Images}
                    shortName={item.shortName}
                    fullName={item.fullName}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                    chegiram={item.chegiram}
                    skidka={item.skidka}
                    rating={item.rating}
                    onClickCard={(obj) => onClickArzon(obj)}
                    zakazlar={item.zakazlar}
                    sotuvchi={item.sotuvchi}
                    key={item.id}
                  >
                    <button className="skidka-btn">Aksiya</button>
                  </Card>
                </>
              ) : null
            )
          : data.map((item) =>
              item.skidka == true ? (
                <Card
                  Images={item.Images}
                  shortName={item.shortName}
                  fullName={item.fullName}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  chegiram={item.chegiram}
                  skidka={item.skidka}
                  rating={item.rating}
                  onClickCard={(obj) => onClickArzon(obj)}
                  zakazlar={item.zakazlar}
                  sotuvchi={item.sotuvchi}
                  key={item.id}
                >
                  <button className="skidka-btn">Aksiya</button>
                </Card>
              ) : null
            )}
      </div>
      {openSkidka == false ? (
        <button className="open" onClick={() => setOPenSkidka(true)}>Yana 20</button>
      ) : null}
    </div>
  );
};

export default Arzon;

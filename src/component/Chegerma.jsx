import React from "react";
import Card from "./Card";
import "./Chegerma.css";
const Chegerma = ({ data, onViewCard }) => {
  const onClickCard = (obj) => {
    onViewCard(obj);
  };

  return (
    <div className="Chegerma">
      <h2>Chegirmalar 💖 ➡️</h2>
      <div className="chegermalar-cards">
        {data.map((item) =>
          item.chegiram == true ? (
            <Card
              Images={item.Images}
              shortName={item.shortName}
              fullName={item.fullName}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              chegiram={item.chegiram}
              skidka={item.skidka}
              rating={item.rating}
              onClickCard={(obj) => onClickCard(obj)}
              zakazlar={item.zakazlar}
              sotuvchi={item.sotuvchi}
              key={item.id}
            >
              <button className="chegirma-btn">Chegirma</button>
            </Card>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Chegerma;

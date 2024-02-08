import { useEffect } from "react";
import React from "react";
import "./modal.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Card from "./Card";
const ViewModalDiv = ({
  currentImageIndex,
  setCurrentImageIndex,
  modalData,
  setModalData,
}) => {
  const [counter, setCounter] = React.useState(1);
  useEffect(() => {
    if (counter == 0) {
      counter + 1;
    }
  }, [counter]);
  return (
    <>
      <div className="viewModalDiv">
        <div className="images">
          <div className="component-images">
            {modalData[0].Images.map((image, index) => (
              <img
                key={index}
                src={image}
                className="fadeIn"
                style={{
                  cursor: "pointer",
                  border:
                    index == currentImageIndex ? "2px solid #6fd943" : "none",
                }}
                alt=""
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          <div className="home-img">
            <img
              className="home-img"
              src={modalData[0].Images[currentImageIndex]}
              alt=""
            />
          </div>
        </div>
        <div className="details-cell">
          <div className="start-info">
            <Box
              sx={{
                "& > legend": { mt: 3 },
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={modalData[0].rating}
                precision={0.5}
                readOnly
              />
            </Box>
            <h3>{modalData[0].zakazlar} ta buyurtma</h3>
          </div>
          <h2>{modalData[0].fullName}</h2>
          <div className="info">
            <h3>
              Sotuvchi: <span style={{ opacity: 0 }}>fjk</span>
              {modalData[0].sotuvchi}
            </h3>
            <h3>
              Yetkazib berish: <span style={{ opacity: 0 }}>fjk</span> 1 kun,
              bepul
            </h3>
          </div>
          <h2 className="counter">
            Miqdor:
            <br />
            {"  "}
            {"  "}
            <br />
            <span className="span">
              <span>
                <button
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    } else {
                      setCounter(1);
                    }
                  }}
                >
                  -
                </button>
              </span>
              <span>{counter}</span>
              <span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
              </span>
            </span>
          </h2>
          <h3 style={{ fontSize: "16px" }} className="narx">
            Narxi: <br /> <span>{modalData[0].newPrice}</span>
          </h3>
          <div className="button-card">
            <button>Savatga Qo'shish</button>
            <button
              className="button-zor"
              onClick={() => {
                if (counter > 0) {
                  setModalData((prevData) => {
                    return [
                      {
                        ...prevData[0],
                        zakazlar: prevData[0].zakazlar + counter,
                      },
                    ];
                  });
                  setCounter(0);
                } else {
                  setCounter(1);
                }
              }}
            >
              Tugmani 1 bosishda xarid qilish
            </button>
            <button>
              <img src="heart1.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModalDiv;

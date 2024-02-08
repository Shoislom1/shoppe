import React from "react";
import "./Cardes.css";
import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Arzon from "./Arzon";
const Cardes = ({ data, onViewCard }) => {
  const openOOOOO = (obj) => {
    onViewCard(obj);
  };
  return (
    <div className="Cardes">
      <div className="all-img">
        <img className="home-img" src="img4.jpg" alt="" />
      </div>
      <h2 style={{ marginTop: "50px" }}>Monitorlar</h2>

      <div id="monitor" className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>

      <div className="card-list" id="monitor">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="swiper-1">
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <h2 style={{ marginTop: "50px" }}>Telefonlar</h2>

      <div id="tel" className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Oshxona uchun texnika</h2>

      <div className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Issiq texnika</h2>

      <div id="p" className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Xolodilnik</h2>

      <div className="card-list" id="kol">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Shinam uy</h2>

      <div id="tel" className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Kolonkalar</h2>

      <div className="card-list" id="kol">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <h2 style={{ marginTop: "50px" }}>Mashxur</h2>

      <div className="card-list">
        {data.map((item) =>
          item.chegiram == false ? (
            item.skidka == false ? (
              <Card
                Images={item.Images}
                shortName={item.shortName}
                fullName={item.fullName}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                chegiram={item.chegiram}
                skidka={item.skidka}
                rating={item.rating}
                onClickCard={(obj) => openOOOOO(obj)}
                zakazlar={item.zakazlar}
                sotuvchi={item.sotuvchi}
                key={item.id}
              >
                <h2 style={{ opacity: 0 }}>Sigma Sila</h2>
              </Card>
            ) : null
          ) : null
        )}
      </div>
      <Arzon data={data} onViewCard={(obj) => onViewCard(obj)} />
      <Swiper navigation={true} modules={[Navigation]} className="swiper-1">
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "#6FD943" }}>
          <div className="swiper-div1">
            <div className="text">
              <h3>Новый IPhon 12</h3>
              <p>Теперь в новом цветах</p>
              <h6>Скоро в Продаже</h6>
              <button className="swiper-btn">Подробнее</button>
            </div>
            <img src="ell.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <a href="#navbar">
        <img style={{ marginLeft: "95%" }} src="arrow.png" alt="" />
      </a>
    </div>
  );
};

export default Cardes;

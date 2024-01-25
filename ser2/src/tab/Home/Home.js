import { useState } from "react";
import {
  Progress,
  Space,
  Modal,
  Button,
  Col,
  InputNumber,
  Row,
  Slider,
  Image,
  Carousel,
} from "antd";
import Time from "../Dry/Time";
import Humidity from "../Dry/Humidity";
import Temp from "../Dry/Temp";
import TempHumidityOut from "./TempHumidityOut";
import TempHumidityIn from "./TempHumidityIn";
import StatusIO from "./StatusIO";
import Weighing1 from "./Weighing1";
import Weighing2 from "./Weighing2";
import ViewStateOnOff from "../Setting/ViewStateOnOff";
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (

    <div className="body">
      <div className="value_home">
        <div>
          <TempHumidityOut />
        </div>
        <TempHumidityIn />

        
          <StatusIO />
        

        <div className="dry-body">
          <div className="BT_View_ON_OFF">ค่าควมคุมการตากแห้ง</div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Temp />
            <Humidity />
          </div>
          <div
            style={{
              display: "grid",
              justifyContent: "space-around",
            }}
          >
            <Time />
            <ViewStateOnOff />
          </div>
        </div>

        <Carousel afterChange={onChange}>
          <Weighing1 />
          <Weighing2 />
        </Carousel>
      </div>
    </div>

  );
};

export default Home;

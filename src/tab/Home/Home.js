import { useState } from "react";
import {
  Carousel,
} from "antd";
import Time from "../Dry/Time";
import Humidity from "../Dry/Humidity";
import Temp from "../Dry/Temp";
import TempHumidityOut from "./TempHumidityOut";
import TempHumidityIn from "./TempHumidityIn";
import StatusIO from "./StatusIO";
import ViewStateOnOff from "../Setting/ViewStateOnOff";
import StapleValue1 from "../Dry/StapleValue1";
import StapleValue2 from "../Dry/StapleValue2";
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
// new
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
       
         <div className="dry-body">
           <Carousel afterChange={onChange}>
          <StapleValue1 />
          <StapleValue2 />
        </Carousel>
         </div>
         
       
      </div>
    </div>

  );
};

export default Home;

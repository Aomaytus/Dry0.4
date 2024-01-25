import React, { useState, useEffect } from "react";
import {
  Carousel,
} from "antd";
import FanView from "./FanView";
import HeaterView from "./HeaterView";
const contentStyle = {
  margin: 0,
  height: "auto",
  width: "100%",
  color: "#000000",
  textAlign: "center",
  borderRadius: "10px",
  display: "flex",
};
var HeaterPercentage;
const StatusIO = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <div className="dry-body">
        <div className="BT_View_ON_OFF"> สถานะอุปกรณ์ในระบบ</div>
        <Carousel afterChange={onChange}>
          <div>
            <div style={{ justifyContent: 'space-around', display: 'flex' }}>
              <HeaterView />
              <div>
                <FanView />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default StatusIO;

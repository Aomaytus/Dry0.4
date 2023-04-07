import React, { useState, useEffect } from "react";
import {
  Button,
  Switch,
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
  Progress,
} from "antd";
import { Checkbox } from "antd";
import { Image } from "antd";
import HeaterSet from "./HeaterSet";
import HeaterView from "../Home/HeaterView";
const Heater = () => {
  return (
   
      <div className="dry-body-one">
       <HeaterView/>
       
          <div> ฮีตเตอร์ทำความร้อน</div>
          <div>
            <HeaterSet />
          </div>
          <div style={{ marginTop: "5px" }}>
            <Switch defaultChecked />
          </div>
       
      </div>
  
  );
};
export default Heater;

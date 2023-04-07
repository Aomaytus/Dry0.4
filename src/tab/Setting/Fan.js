import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
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
import FanSet from "./FanSet";
import FanView from "../Home/FanView";
const Fan = () => {
  return (
    <div className="dry-body-one">
      <FanView />
      <FanSet />
      <div style={{ marginTop: "5px" }}>
        <Switch defaultChecked />
      </div>
    </div>
  );
};
export default Fan;

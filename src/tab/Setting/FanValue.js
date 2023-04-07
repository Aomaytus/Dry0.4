import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";

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
const FanValue = () => {
  const [checked1, setChecked1] = useState(true);
  const toggleChecked1 = () => {
    setChecked1(true);
    setChecked1(false);
  };
  const [FanPercentage, setFanPercentage] = useState(50);
  const onChange1 = (newValue) => {
    setFanPercentage(newValue);
    console.log("FanPercentage " + FanPercentage);
    // var FanPercentage = FanPercentage;
   
  };

  update(ref(db, `Fram`), {
      FanPercentage,
    });
  return (
    <div>
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={100}
            onChange={onChange1}
            value={typeof FanPercentage === "number" ? FanPercentage : 1}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={100}
            style={{
              margin: "0 16px",
            }}
            value={FanPercentage + "%"}
            onChange={onChange1}
          />
        </Col>
      </Row>
      <p style={{ marginTop: "1px", marginBottom: "20px" }}></p>
      <p>
        <Button>รีเซ็ต</Button>
        
      </p>
    </div>
  );
};

export default FanValue;

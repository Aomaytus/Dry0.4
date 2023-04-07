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
const HeaterValue = () => {
  const [checked1, setChecked1] = useState(true);
  const toggleChecked1 = () => {
    setChecked1(true);
    setChecked1(false);
  };
  const [HeaterPercentage, setHeaterPercentage] = useState(50);
  const onChange1 = (newValue) => {
    setHeaterPercentage(newValue);
    console.log("HeaterPercentage " + HeaterPercentage);
    // var HeaterPercentage = HeaterPercentage;
    
  };
  update(ref(db, `Fram`), {
      HeaterPercentage,
    });
  return (
    <div>
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={99}
            onChange={onChange1}
            value={typeof HeaterPercentage === "number" ? HeaterPercentage : 1}
            step={1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={99}
            style={{
              margin: "0 16px",
            }}
            value={HeaterPercentage + "%"}
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

export default HeaterValue;

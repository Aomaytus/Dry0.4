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
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      setFanPercentage(data.Fram.FanPercentage);
    });
  }, []);
  const [FanPercentage, setFanPercentage] = useState(50);
  const setup = () => {
    update(ref(db, `Fram`), {
      FanPercentage,
    });
  }
  const fanset = (newValue) => {
    setFanPercentage(newValue);
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={100}
            onChange={fanset}
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
            onChange={fanset}
          />
        </Col>
      </Row>
      <Button onClick={setup} type="primary">บันทึก</Button>
    </div>
  );
};

export default FanValue;

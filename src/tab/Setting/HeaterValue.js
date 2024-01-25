import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Button, Col, InputNumber, Row, Slider } from "antd";
const HeaterValue = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      setHeaterPercentage(data.Fram.HeaterPercentage);
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  const [HeaterPercentage, setHeaterPercentage] = useState(50);
  const heaterset = (newValue) => {
    setHeaterPercentage(newValue);
  };
  function setup() {
    update(ref(db, `Fram`), {
      HeaterPercentage,
    });
  }
  return (
    <div>
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={100}
            onChange={heaterset}
            value={typeof HeaterPercentage === "number" ? HeaterPercentage : 1}
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
            value={HeaterPercentage + "%"}
            onChange={heaterset}
          />
        </Col>
      </Row>
      <Button onClick={setup} type="primary">
        บันทึก
      </Button>
    </div>
  );
};
export default HeaterValue;

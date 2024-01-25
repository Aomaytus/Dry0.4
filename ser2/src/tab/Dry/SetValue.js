import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Col, InputNumber, Row, Slider, Space } from "antd";

import { Image } from "antd";

const SetValue = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      // FanPercentage = data.Fram.FanPercentage;
      // HeaterPercentage = data.Fram.HeaterPercentage;
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

 

  const [inputValueTemp, setinputValueTemp] = useState(40);
  const onChange = (newValue) => {
    setinputValueTemp(newValue);
  };
  const [inputValueTempHum, setinputValueTempHum] = useState(45);
  const onChange1 = (newValue) => {
    setinputValueTempHum(newValue);
  };

  var TempSet = inputValueTemp;
  var HumSet = inputValueTempHum;

  update(ref(db, `Fram`), { TempSet, HumSet });

  const HMStart = (value) => {
    var HmStart = value;
    update(ref(db, `Fram`), { HmStart });
    console.log("changed", value);
  };
  const MINStart = (value) => {
    var MinStart = value;
    update(ref(db, `Fram`), { MinStart });
    console.log("changed", value);
  };
  const HMStop = (value) => {
    var HmStop = value;
    update(ref(db, `Fram`), { HmStop });
    console.log("changed", value);
  };
  const MINStop = (value) => {
    var MinStop = value;
    update(ref(db, `Fram`), { MinStop });
    console.log("changed", value);
  };
  return (
    <div>
      <div>
        <div>
          <Image
            width={30}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/850/850960.png"
          />
          กำหนดเวลาการตากแห้ง
        </div>
        <div>
          <div
            style={{
              margin: "5px 0px",
            }}
          >
            เริ่มทำงาน
          </div>
          <InputNumber
            min={0}
            max={24}
            defaultValue={0}
            prefix="ชั่วโมง:"
            onChange={HMStart}
          />
          :
          <InputNumber
            min={0}
            max={59}
            defaultValue={0}
            prefix="นาที:"
            onChange={MINStart}
          />
          <div
            style={{
              margin: "5px 0px",
            }}
          >
            หยุดทำงาน
          </div>
          <InputNumber
            min={0}
            max={24}
            defaultValue={0}
            prefix="ชั่วโมง:"
            onChange={HMStop}
          />
          :
          <InputNumber
            min={0}
            max={59}
            defaultValue={0}
            prefix="นาที:"
            onChange={MINStop}
          />
        </div>
      </div>
      <div>
        <Image
          width={30}
          preview={false}
          style={{
            margin: "10px 0px",
          }}
          src="https://cdn-icons-png.flaticon.com/512/2100/2100100.png"
        />{" "}
        กำหนดอุณหภูมิควบคุม
        <Row>
          <Col span={12}>
            <Slider
              min={30}
              max={70}
              onChange={onChange}
              value={typeof inputValueTemp === "number" ? inputValueTemp : 40}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={30}
              max={70}
              style={{
                margin: "0px 10px",
              }}
              value={inputValueTemp}
              onChange={onChange}
            />
          </Col>
        </Row>
      </div>
      <div>
        <Image
          width={30}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/8923/8923689.png"
        />{" "}
        กำหนดความชื้นควบคุม
        <Row>
          <Col span={12}>
            <Slider
              min={10}
              max={50}
              onChange={onChange1}
              value={typeof inputValueTempHum === "number" ? inputValueTempHum : 40}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={10}
              max={50}
              style={{
                margin: "0px 10px",
              }}
              value={inputValueTempHum}
              onChange={onChange1}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SetValue;

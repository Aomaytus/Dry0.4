import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";

import { Col, InputNumber, Row, Slider, Space, Button } from "antd";
import { Checkbox } from "antd";
import { Image } from "antd";

const AddWeighing1 = () => {
  const [pig, setpig] = useState(true);
  const [banana, setbanana] = useState(true);
  const togglepig = () => {
    setbanana(true);
    setpig(false);
    var Weighing1Type = 0;
    update(ref(db, `Fram`), {
      Weighing1Type,
    });
  };
  const togglebanana = () => {
    setpig(true);
    setbanana(false);
    var Weighing1Type = 1;
    update(ref(db, `Fram`), {
      Weighing1Type,
    });
  };
  const set = () => {
    var scale1 = 1;
    update(ref(db, `Fram`), {
      scale1,
    });
  };
  const set_default = () => {
    var scale1 = 0;
    update(ref(db, `Fram`), {
      scale1,
    });
  };
  const [inputValue1, setInputValue1] = useState(0);
  const onChange1 = (newValue) => {
      setInputValue1(newValue);
      var Weighing1BeforeSet = newValue; 
      update(ref(db, `Fram`), {
        Weighing1BeforeSet,
    });
  
    console.log("inputValue1 " + newValue);
    
  };
  const [inputValue2, setInputValue2] = useState(0);
  const onChange2 = (newValue) => {
    setInputValue2(newValue);
   
    var Weighing1BehindSet = newValue;
    update(ref(db, `Fram`), {
      Weighing1BehindSet,
    }); console.log("inputValue2 " + newValue);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div >
      
        <p style={{ marginBottom: "-1px" }}>เลือกวัตถุดิบตากแห้ง</p>
        <p >
          <Row>
            <Checkbox
              checked={!pig}
              onClick={togglepig}
              style={{ marginRight: "10px" }}
            />
            <Col span={20}>
              {" "}
              เนื้อหมู
              <Image
                width={30}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/8453/8453627.png"
              />{" "}
            </Col>

            <Col span={20}>
              <Checkbox
                checked={!banana}
                onClick={togglebanana}
                style={{ marginRight: "10px" }}
              />
              กล้วย
              <Image
                width={30}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/9648/9648084.png"
                style={{ marginLeft: "8px" }}
              />{" "}
            </Col>
          </Row>
          {/* </p>
        <Button type="primary" onClick={ set_default}>คำนวนน้ำหนักอัตโนมัติ</Button>
        <p> */}
          <Button type="text">กำหนดด้วยตนเอง</Button>
        </p>
        <p>
          {" "}
          <Image
            width={40}
            preview={false}
            onClick={showModal}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />{" "}
          น้ำหนักก่อนตาก
          <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={2}
                onChange={onChange1}
                value={typeof inputValue1 === "number" ? inputValue1 : 0}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={2}
                step={0.01}
                style={{
                  margin: "0 16px",
                }}
                value={inputValue1}
                onChange={onChange1}
              />
            </Col>
          </Row>
        </p>
        <p>
          {" "}
          <Image
            width={40}
            preview={false}
            onClick={showModal}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />{" "}
          น้ำหลักหลังตาก
          <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={2}
                onChange={onChange2}
                value={typeof inputValue2 === "number" ? inputValue2 : 0}
                step={0.01}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={2}
                step={0.01}
                style={{
                  margin: "0 16px",
                }}
                value={inputValue2}
                onChange={onChange2}
              />
            </Col>
          </Row>
        </p>
      </div>
   
  );
};

export default AddWeighing1;

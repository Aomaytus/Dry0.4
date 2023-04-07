import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";

import { Col, InputNumber, Row, Slider, Space,Button } from "antd";
import { Checkbox } from "antd";
import { Image } from "antd";

const AddWeighing1 = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const toggleChecked1 = () => {
    setChecked2(true);
    setChecked1(false);
    update(ref(db, `Fram`), {
    
    });

  };
  const toggleChecked2 = () => {
    setChecked1(true);
    setChecked2(false);
  };
  const [inputValue1, setInputValue1] = useState(0.1);
  const onChange1 = (newValue) => {
    setInputValue1(newValue);
    console.log("inputValue1 "+inputValue1)
  };
  const [inputValue2, setInputValue2] = useState(0.1);
  const onChange2 = (newValue) => {
    setInputValue2(newValue);
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div style={{ justifyContent: "center" }}>
     
        <div>
          <p style={{ marginBottom: "-1px" }}>เลือกวัตถุดิบตากแห้ง</p>
          <p style={{ marginLeft: "20px" }}>
            <Row>
              <Checkbox
                checked={!checked1}
                onClick={toggleChecked1}
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
                  checked={!checked2}
                  onClick={toggleChecked2}
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
          </p>
          <Button type="primary">คำนวนน้ำหนักอัตโนมัติ</Button>
        <p>
          <Button type="text">กำหนดด้วยตนเอง</Button>
        </p>
          <p>
            {" "}
            <Image
              width={40}
              preview={false}
              onClick={showModal}
              src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
            /> น้ำหนักก่อนตาก
            <Row>
              <Col span={12}>
                <Slider
                  min={0.01}
                  max={50}
                  onChange={onChange1}
                  value={typeof inputValue1 === "number" ? inputValue1 : 1}
                  step={0.01}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0.01}
                  max={50}
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
            /> น้ำหลักหลังตาก
            <Row>
              <Col span={12}>
                <Slider
                  min={0.01}
                  max={50}
                  onChange={onChange2}
                  value={typeof inputValue2 === "number" ? inputValue2 : 1}
                  step={0.01}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0.01}
                  max={50}
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
      </div>
 
  );
};

export default AddWeighing1;

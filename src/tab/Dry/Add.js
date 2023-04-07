import React, { useState, useEffect } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
import { Checkbox } from "antd";
import { Image } from "antd";

const Add = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const toggleChecked1 = () => {
    setChecked2(true);
    setChecked1(false);
  };
  const toggleChecked2 = () => {
    setChecked1(true);
    setChecked2(false);
  };

  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  const [inputValue1, setInputValue1] = useState(1);
  const onChange1 = (newValue) => {
    setInputValue1(newValue);
  };
  const [inputValue2, setInputValue2] = useState(1);
  const onChange2 = (newValue) => {
    setInputValue2(newValue);
  };
  const [startTime, setStartTime] = useState({ hour: "", minute: "" });
  const [endTime, setEndTime] = useState({ hour: "", minute: "" });

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      const currentTime = new Date();
      const Minutes = currentTime.getMinutes() + 1;
      setStartTime({ hour: currentTime.getHours(), minute: Minutes });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleStartTimeChange = (event) => {
    const { name, value } = event.target;
    setStartTime({ ...startTime, [name]: value });
    console.log(startTime.hour + ":" + startTime.minute);
  };

  const handleEndTimeChange = (event) => {
    const { name, value } = event.target;
    setEndTime({ ...endTime, [name]: value });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ justifyContent: "center" }}>
      <div style={{ marginBottom: "10px" }}>
        <Image
          width={30}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/2100/2100100.png"
        />{" "}
        กำหนดอุณหภูมิควบคุม
        <Row>
          <Col span={12}>
            <Slider
              min={30}
              max={70}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 40}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={30}
              max={70}
              style={{
                margin: "0 16px",
              }}
              value={inputValue}
              onChange={onChange}
            />
          </Col>
        </Row>
      </div>
      <div style={{ marginBottom: "10px" }}>
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
              value={typeof inputValue1 === "number" ? inputValue1 : 40}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={10}
              max={50}
              style={{
                margin: "0 16px",
              }}
              value={inputValue1}
              onChange={onChange1}
            />
          </Col>
        </Row>
      </div>
      <div>
        <div style={{ marginTop: "10px", marginBottom: "-10px" }}>
          <Image
            width={30}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/850/850960.png"
          />
          กำหนดเวลาการตากแห้ง
        </div>
        <p
          style={{
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {" "}
          <p style={{ marginTop: "-1px", marginBottom: "-15px" }}>เริ่มทำงาน</p>
          <p>
            <input
              className="form-control mr-2"
              type="number"
              name="hour"
              min="0"
              max="23"
              value={startTime.hour}
              onChange={handleStartTimeChange}
              placeholder="Hour"
            />
            <span className="mx-2">:</span>
            <input
              className="form-control"
              type="number"
              name="minute"
              min="0"
              max="59"
              value={startTime.minute}
              onChange={handleStartTimeChange}
              placeholder="Minute"
            />
          </p>
          <p style={{ marginTop: "-15px", marginBottom: "-15px" }}>หยุดทำงาน</p>
          <p>
            <input
              className="form-control mr-2"
              type="number"
              name="hour"
              min="0"
              max="23"
              value={endTime.hour}
              onChange={handleEndTimeChange}
              placeholder="Hour"
            />
            <span className="mx-2">:</span>
            <input
              className="form-control"
              type="number"
              name="minute"
              min="0"
              max="59"
              value={endTime.minute}
              onChange={handleEndTimeChange}
              placeholder="Minute"
            />
          </p>
        </p>
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

          <p>
            {" "}
            <Image
              width={40}
              preview={false}
              onClick={showModal}
              src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
            />
            <Row>
              <Col span={12}>
                <Slider
                  min={10}
                  max={50}
                  onChange={onChange2}
                  value={typeof inputValue2 === "number" ? inputValue2 : 40}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={10}
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
    </div>
  );
};

export default Add;

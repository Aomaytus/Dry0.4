import React, { useState, useEffect } from "react";
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
import StateOnOff from "../Setting/StateOnOff";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var State_Weighing2 = 0,
  Weighing2Before = 0,
  Weighing2Behind = 0,
  Weighing2Percent = 0,
  Weighing2Type = 0,
  scale2 = 0;

const Weighing2 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      State_Weighing2 = data.Fram.State_Io_Weigh2;
      scale2 = data.Fram.scale2;
      if (scale2 == 1) {
        Weighing2Before = data.Fram.Weighing2BeforeSet;
        Weighing2Behind = data.Fram.Weighing2Behind;
        if (Weighing2Before >= 0.0 ) {
          setWeighingState("ข้อมูลผิดพลาด");
        } 
      } 
      Weighing2Percent = data.Fram.Weighing2Percent;
      Weighing2Type = data.Fram.Weighing2Type;
      if (State_Weighing2 >= 1) {
        setWeighingState("เปิด");
      } else {
        setWeighingState("ปิด");
      }
      if (Weighing2Type >= 1) {
        setWeighingType("กล้วย");
      } else {
        setWeighingType("หมู");
      }
      // HeaterPercentage = data.Fram.HeaterPercentage;
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  const contentStyle2 = {
    margin: 0,
    height: "90px",
    width: "100%",
    color: "#000000",
    background: "#f3f3f3",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div>
      <div className="dry-body">
        <div className="BT_View_ON_OFF">
          <Image
            width={15}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
          />
          สถานะการทำงานชุดชั่งน้ำหนักที่ 2 {WeighingState}
        </div>

        <div style={contentStyle2}>
          <div>
            <div> วัตถุดิบตากแห้ง </div>
            <div>น้ำหนักก่อนตาก</div>
            <div>น้ำหนักหลังตาก</div>
            <div>น้ำหนักแห้ง</div>
          </div>

          <div style={{ textAlignLast: "right" }}>
            <div>{WeighingType}</div>
            <div>{Weighing2Before + " "}กก.</div>
            <div>{Weighing2Behind + " "}กก.</div>
            <div>{Weighing2Percent} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weighing2;

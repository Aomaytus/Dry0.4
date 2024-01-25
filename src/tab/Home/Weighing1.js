import React, { useState, useEffect } from "react";
import {
  Image,
} from "antd";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var State_Weighing1 = 0,
  Weighing1Before = 0,
  Weighing1Behind = 0,
  Weighing1Percent = 0,
  Weighing1Type = 0,
  scale1 = 0;

const Weighing1 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      State_Weighing1 = data.Fram.State_Io_Weigh1;
      scale1 = data.Fram.scale1;
      if (scale1 == 1) {
        Weighing1Before = data.Fram.Weighing1BeforeSet;
        Weighing1Behind = data.Fram.Weighing1Behind;
        if (Weighing1Before >= 0.0 ) {
          setWeighingState("ข้อมูลผิดพลาด");
        } 
      } 
      Weighing1Percent = data.Fram.Weighing1Percent;
      Weighing1Type = data.Fram.Weighing1Type;
      if (State_Weighing1 >= 1) {
        setWeighingState("เปิด");
      } else {
        setWeighingState("ปิด");
      }
      if (Weighing1Type >= 1) {
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
          สถานะการทำงานชุดชั่งน้ำหนักที่ 1 {WeighingState}
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
            <div>{Weighing1Before + " "}กก.</div>
            <div>{Weighing1Behind + " "}กก.</div>
            <div>{Weighing1Percent} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weighing1;

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
} from "antd";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var InHum, InTemp;

const TempHumidityIn = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  function getdeta() {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      InTemp = data.Fram.InTemp;
      if (InTemp >= 80 || InTemp <= 15) {
        InTemp = 0;
      }
      InHum = data.Fram.InHum;
      if (InHum <= 0 || InHum >= 99) {
        InHum = 0;
      }
    
      // if (data !== null) {
      //   Object.values(data).map((todo) => {
      //     setTodos((oldArray) => [...oldArray, todo]);
      //   });
      // }
    });

  }
  useEffect(() => {
    getdeta();

  }, []);
  return (
    <div className="dry-body">
      <div className="BT_View_ON_OFF">สภาพแวดล้อมภายนอกโรงเรือน</div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", marginBottom: "-10px" }}>
          <div style={{ width: "100%" }}>
            <Progress
              type="circle"
              percent={InTemp}
              width={50}
              strokeColor={{
                "100%": "#ff4415d3",
              }}
              format={(percent) => `${percent} C`}
            />
            <div style={{ marginTop: "2px", marginBottom: "2px" }}>
              อุณหภูมิ
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Progress
              type="circle"
              percent={InHum}
              width={50}
              format={(percent) => `${percent} %`}
            />
            <div style={{ marginTop: "2px", marginBottom: "10px" }}>
              ความชื้น
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempHumidityIn;

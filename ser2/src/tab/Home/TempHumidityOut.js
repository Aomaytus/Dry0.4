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
var OutTemp = 0,
  OutHum = 0;

const TempHumidityOut = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      OutTemp = data.Fram.OutTemp;
      if (OutTemp <= 0 || OutTemp >= 80) {
        OutTemp = 0;
      }
      OutHum = data.Fram.OutHum;
      if (OutHum <= 0 || OutHum >= 80) {
        OutHum = 0;
      }
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  return (
    <div className="dry-body">
      <div className="BT_View_ON_OFF">สภาพแวดล้อมภายในโรงเรือน</div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", marginBottom: "-10px" }}>
          <div style={{ width: "100%" }}>
            <Progress
              type="circle"
              percent={OutTemp}
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
              percent={OutHum}
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

export default TempHumidityOut;

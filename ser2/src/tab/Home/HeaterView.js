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
  Carousel
} from "antd";

import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var HeaterPercentage, State_Heater;
const HeaterView = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [Heater_State, setHeater_State] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      HeaterPercentage = data.Fram.HeaterPercentage;
      if (HeaterPercentage < 0 || HeaterPercentage > 100) {
        HeaterPercentage = -1;
      }
      State_Heater = data.Fram.State_Heater;
      if (State_Heater > 0) { setHeater_State("เปิด") }
      else { setHeater_State("ปิด") }
    });
  }, []);
  return (
    <div className="Icon_item">
     
        <Image
          width={40}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/6504/6504211.png"
        />
        <Progress percent={HeaterPercentage} size="small" status="active"  />

        <div>{Heater_State}</div>
        
      
    </div>
  );
};

export default HeaterView;

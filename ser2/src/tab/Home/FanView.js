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
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var FanPercentage, FanStatus;
const FanView = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [State_Fan, setState_Fan] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      FanPercentage = data.Fram.FanPercentage;
      if (FanPercentage < 0 || FanPercentage > 100) {
        FanPercentage = -1;
      }

      FanStatus = data.Fram.State_Fan;
      if (FanStatus > 0) { setState_Fan("เปิด") }
      else { setState_Fan("ปิด") }
    });
  }, []);
  return (
    <div className="Icon_item">
     
        <Image
          width={40}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/3653/3653189.png"
        />
        <Progress percent={FanPercentage} size="small" status="active" />

        <div>{State_Fan}</div>

      </div>
  
  );
};

export default FanView;

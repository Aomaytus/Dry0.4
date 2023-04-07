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
var FanPercentage;
const FanView = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      FanPercentage = data.Fram.FanPercentage;

      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  return (
    <div>
      <div style={{ width: "100%",alignItems:'center'}}>
        <Image
          width={40}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/3653/3653189.png"
        />
        <Progress
          type="circle"
          percent={FanPercentage}
          size={30}
          strokeColor={{
            "100%": "#87d068",
          }}
        />{" "}
        <div style={{ marginTop: "-5px" }}>
          <div>การทำงาน</div>
        </div>
      </div>
    </div>
  );
};

export default FanView;

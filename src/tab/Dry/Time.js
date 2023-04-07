import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var HmStart, MinStart, HmStop, MinStop;
const Time = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      HmStart = data.Fram.HmStart;
      MinStart = data.Fram.MinStart;
      HmStop = data.Fram.HmStop;
      MinStop = data.Fram.MinStop;
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);
  return (
    <div>
      <div>
        <Image
          width={20}
          preview={false}
          src="https://cdn-icons-png.flaticon.com/512/850/850960.png"
        />
        เริ่มทำงาน { HmStart+":"+ MinStart+" ถึง "+HmStop+":"+MinStop}
      </div>
    </div>
  );
};

export default Time;

import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
var HumSet;
const Humidity = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      HumSet = data.Fram.HumSet;
      if (HumSet <= 0 || HumSet > 80) {
        HumSet = 0;
      }
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/8923/8923689.png"
          />
        </div>
        <div>ค่าความชื้น {HumSet + " "}%</div>
      </div>
    </div>
  );
};

export default Humidity;

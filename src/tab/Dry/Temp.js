import React, { useState, useEffect,createContext } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
let TempSet;
const Temp = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      TempSet = data.Fram.TempSet;
      if (TempSet <= 0 || TempSet >= 80) {
        TempSet = 0;
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
            src="https://cdn-icons-png.flaticon.com/512/2100/2100100.png"
          />
        </div>
        <div>ค่าอุณหภูมิ {TempSet + " "}C</div>
      </div>
    </div>
  );
};


export default Temp;

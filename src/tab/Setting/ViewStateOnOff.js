import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";

var IO = 0;
const ViewStateOnOff = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [State_Io, setState_Io] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      IO = data.Fram.State_Io;
      if (IO >= 1) {
        setState_Io("เปิด");
      } else {
        setState_Io("ปิด");
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
      <div style={{marginLeft:"10px"}}>สถานะ โหมดการควบคุม {State_Io}</div>
    </div>
  );
};

export default ViewStateOnOff;

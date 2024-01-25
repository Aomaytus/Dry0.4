import React, { useState, useEffect } from "react";
import {
  Switch,
} from "antd";
import HeaterSet from "./HeaterSet";
import HeaterView from "../Home/HeaterView";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
const Heater = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [disabled, setDisabled] = useState();
  const [HeaterPercent, setHeaterPercent] = useState(50);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      var ST_IO = data.Fram.State_Heater;
      if (ST_IO == 1) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      // console.log(ST_IO);
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const State_Heater = (checked) => {
    console.log(`heater ${checked}`);
    var State_Heater;
    if (checked == true) {
      State_Heater = 1;
    } else {
      State_Heater = 0;
    }
    update(ref(db, `Fram`), {
      State_Heater,
    });
  };
  return (
    <div className="dry-body-one">
      <HeaterView  />
      <div >
        <HeaterSet />
      </div>
      <div style={{ marginTop: "5px" }}>
        <Switch checked={disabled} onChange={State_Heater} />
      </div>
    </div>
  );
};
export default Heater;

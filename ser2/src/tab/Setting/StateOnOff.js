import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Switch } from "antd";
var Sw;
const StateOnOff = () => {
 const [disabled, setDisabled] = useState(); 
 const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      var ST_IO = data.Fram.State_Io;
      if (ST_IO == 1 || ST_IO==2) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      console.log(ST_IO)
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const State_IO = (checked) => {
    console.log(`switch to ${checked}`);
    var State_Io;
    if (checked == true) {
      State_Io = 1;
    } else {
      State_Io = 0;
    }
    update(ref(db, `Fram`), {
      State_Io,
    });
  };
  return (
    <div>
      <Switch
        size="small"
        checked={disabled}
        style={{ marginLeft: "10px" }}
        onChange={State_IO}
      />
    </div>
  );
};

export default StateOnOff;
//ควยโอ
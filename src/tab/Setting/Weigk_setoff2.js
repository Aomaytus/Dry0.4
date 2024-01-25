import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Switch, Progress, Image } from "antd";
var w2;
const Weigk_setoff2 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [disabled, setDisabled] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      var ST_IO_ch2 = data.Fram.State_Io_Weigh2_SC;
      
      if (ST_IO_ch2 == 2) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      w2 = data.Fram.hx711_2_scale / 1000;
      w2 = w2.toFixed(2);
      // console.log(ST_IO_ch1);
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  const State_Io_Weigh2 = (checked) => {
    console.log(`Fan ${checked}`);
    var State_Io_Weigh2_SC;
    if (checked == false) {
      State_Io_Weigh2_SC = 1;
    } else {
      State_Io_Weigh2_SC = 2;
    }
    update(ref(db, `Fram`), {
      State_Io_Weigh2_SC,
    });
  };

  return (
    <div className="dry-body">
      <div style={{ marginTop: "5px" }}>
        <div>ชุดชั่งที่ 2</div>
        <div className="weighing_set">
          <div>
            <Image
              width={50}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
            />
          </div>
          <div className="dry-body-one">{w2} กก.</div>
          <div>
            <Switch
              checked={disabled}
              checkedChildren="Read"
              unCheckedChildren="Load"
              onChange={State_Io_Weigh2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weigk_setoff2;

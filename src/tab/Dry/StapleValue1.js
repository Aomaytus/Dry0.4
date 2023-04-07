import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
var State_Weighing1 = 0,
  Weighing1Before = 0,
  Weighing1Behind = 0,
  Weighing1Percent = 0,
  Weighing1Type = 0;

const StapleValue1 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      State_Weighing1 = data.Fram.State_Weighing1;
      Weighing1Before = data.Fram.Weighing1Before;
      Weighing1Behind = data.Fram.Weighing1Behind;
      Weighing1Percent = data.Fram.Weighing1Percent;
      Weighing1Type = data.Fram.Weighing1Type;
      if (State_Weighing1 >= 1) {
        setWeighingState("เปิด");
      } else {
        setWeighingState("ปิด");
      }
      if (Weighing1Type >= 1) {
        setWeighingType("กล้วย");
      } else {
        setWeighingType("หมู");
      }
      // HeaterPercentage = data.Fram.HeaterPercentage;
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  return (
    <div className="Sraple-body">
      <div className="sraple-bt">
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
          />
          ชุดชั่งที่ 1 วัตถุดิบตากแห้ง {WeighingType}
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักก่อนตาก {Weighing1Before} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก {Weighing1Behind} กก.
        </div>
      </div>
    </div>
  );
};

export default StapleValue1;

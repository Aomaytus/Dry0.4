import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
var State_Weighing1 = 0,
  Weighing1BeforeSet = 0,
  Weighing1BehindSet,
  Weighing1Behind = 0,
  Weighing1Percent = 0,
  Weighing1Type = 0,
  scale1 = 0,
  W1 = 0;

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
      scale1 = data.Fram.scale1;
      // if (scale1 == 1) {
      Weighing1BeforeSet = data.Fram.Weighing1BeforeSet;
      Weighing1BehindSet = data.Fram.Weighing1BehindSet;
      Weighing1Behind = data.Fram.Weighing1Behind;

      // } else {
      // Weighing1Before = data.Fram.Weighing1Before;
      // Weighing1Behind = data.Fram.Weighing1Behind;
      // }
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
      Weighing1Behind = (Weighing1Behind / 1000);
      W1 = Weighing1Behind.toFixed(2);
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
          น้ำหนักก่อนตาก {Weighing1BeforeSet} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก { Weighing1BehindSet} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักปัจจุบัน {W1} กก.
        </div>
      </div>
    </div>
  );
};

export default StapleValue1;

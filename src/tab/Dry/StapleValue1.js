import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
var State_Weighing1 = 0,
  Weighing1BeforeSet = 0,
  Weighing1BehindSet=0,
  Weighing1Type = 0,
  averageWeight_1 = 0;
const StapleValue1 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();

      Weighing1BeforeSet = data.Fram.Weighing1BeforeSet / 1000;
      Weighing1BehindSet = data.Fram.Weighing1BehindSet / 1000;
      averageWeight_1 = data.Fram.averageWeight_1 / 1000;
      if (averageWeight_1 >= Weighing1BeforeSet) {
        averageWeight_1 = (Weighing1BeforeSet);
      }
      Weighing1Type = data.Fram.Weighing1Type;

      // State_Weighing1 = data.Fram.State_Weighing1;
      // scale1 = data.Fram.scale1;
      // Weighing1Behind = data.Fram.Weighing1Behind;
      // Weighing1Percent = data.Fram.Weighing1Percent;

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
          น้ำหนักก่อนตาก {Weighing1BeforeSet.toFixed(2)} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก {Weighing1BehindSet.toFixed(2)} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักปัจจุบัน {averageWeight_1.toFixed(2)} กก.
        </div>
      </div>
    </div>
  );
};

export default StapleValue1;

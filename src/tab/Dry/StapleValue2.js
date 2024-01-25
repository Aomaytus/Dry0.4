import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
var State_Weighing2 = 0,
  Weighing2Before = 0,
  Weighing2BehindSet = 0,
  Weighing2Type = 0,
  averageWeight_2 = 0;
const StapleValue2 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();

      Weighing2Before = data.Fram.Weighing2BeforeSet / 1000;
    
      Weighing2BehindSet = data.Fram.Weighing2BehindSet / 1000;
      averageWeight_2 = data.Fram.averageWeight_2 /1000;
      if (averageWeight_2 > Weighing2Before) {
        averageWeight_2 = Weighing2Before;
      }
      

      
      Weighing2Type = (data.Fram.Weighing2Type)/1000;

      if (State_Weighing2 >= 1) {
        setWeighingState("เปิด");
      } else {
        setWeighingState("ปิด");
      }
      if (Weighing2Type >= 1) {
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
          ชุดชั่งที่ 2 วัตถุดิบตากแห้ง {WeighingType}
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักก่อนตาก { Weighing2Before.toFixed(2)} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก {Weighing2BehindSet.toFixed(2)} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักปัจจุบัน {averageWeight_2.toFixed(2)} กก.
        </div>
      </div>
    </div>
  );
};
export default StapleValue2;

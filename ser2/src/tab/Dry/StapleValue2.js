import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
var State_Weighing2 = 0,
  Weighing2Before = 0,
  Weighing2Behind = 0,
  Weighing2BehindSet=0,
  Weighing2Percent = 0,
  Weighing2Type = 0,
  W2=0;
const StapleValue2 = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState();
  const [WeighingState, setWeighingState] = useState("");
  const [WeighingType, setWeighingType] = useState("");
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      State_Weighing2 = data.Fram.State_Weighing2;
      Weighing2Before = data.Fram.Weighing2BeforeSet;
      Weighing2BehindSet=data.Fram.Weighing2BehindSet;
      Weighing2Behind = data.Fram.Weighing2Behind;
      Weighing2Percent = data.Fram.Weighing2Percent;
      Weighing2Type = data.Fram.Weighing2Type;
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
      Weighing2Behind = (Weighing2Behind / 1000);
      W2 = Weighing2Behind.toFixed(2);
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
          น้ำหนักก่อนตาก {Weighing2Before} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก {Weighing2BehindSet} กก.
        </div>
        <div>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักปัจจุบัน {W2} กก.
        </div>
      </div>
    </div>
  );
};
export default StapleValue2;

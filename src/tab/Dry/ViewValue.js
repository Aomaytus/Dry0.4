import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
import { Button, Popconfirm } from "antd";
import StapleValue1 from "./StapleValue1";
import StateOnOff from "../Setting/StateOnOff";
import SetValue from "./SetValue";
import Temp from "./Temp";
import Humidity from "./Humidity";
import Time from "./Time";
const ViewValue = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };
  const edited = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div>
      <div className="value_home">
        <div className="dry-body">
          <div className="toggle">
            <Button style={{ display: "flex" }}>
              เปิด ปิดโหมดควบคุม
              <StateOnOff />
            </Button>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button type="primary" onClick={showPopconfirm}>
              แก้ไข
            </Button>

            <Popconfirm
              placement="leftTop"
              title="กำหนดค่าตากแห้ง"
              description={<SetValue />}
              open={open}
              onConfirm={edited}
              okButtonProps={{
                loading: confirmLoading,
              }}
              onCancel={handleCancel}
            ></Popconfirm>
          </div>
          <div className="Sraple-body">
            <div className="sraple-bt">
              <Time />
              <Temp />
              <Humidity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewValue;

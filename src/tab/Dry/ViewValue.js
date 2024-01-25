import React, { useState, useEffect } from "react";
import { Button, Popconfirm, Modal } from "antd";
import StateOnOff from "../Setting/StateOnOff";
import SetValue from "./SetValue";
import Temp from "./Temp";
import Humidity from "./Humidity";
import Time from "./Time";

const ViewValue = (props) => {
  const warning = () => {
    Modal.warning({
      title: 'กำหนดค่าควบคุมการตากแห้ง',
      content: (
        <div>
          <SetValue />
        </div>
      ),
      onOk() { },
      cancelText: 'ออก',
      okText: 'ออก',
      okType: 'danger',
    });
  };

  return (
    <div>
   
      <div className="value_home">
        <div className="dry-body">
          <div style={{ display: "flex", justifyContent: "end" }}>
          <Button type="primary" onClick={warning}> แก้ไข</Button>
          </div>
          <div className="toggle">
            <Button style={{ display: "flex" }}>
              เปิด ปิดโหมดควบคุม
              <StateOnOff />
            </Button>
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

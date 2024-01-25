import React, { useState, useEffect } from "react";
import { Button, Popconfirm, Modal } from "antd";
import FanValue from "./FanValue";
const FanSet = () => {
  const showPopconfirm = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const warning = () => {
    Modal.warning({
      title: 'ปรับระดับแรงพัดลม',
      content: (
        <div>
          <FanValue />
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
      <div>
        <div>
          <Button type="primary" onClick={warning}> ปรับระดับแรงพัดลม</Button>
        </div>
      </div>
    </div>
  );
};

export default FanSet;

import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { set, ref, onValue, update, remove } from "firebase/database";
import { Image } from "antd";
import { Button, Popconfirm } from "antd";
import Fanter from "./Heater";
import FanValue from "./FanValue";
const FanSet = () => {
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
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const FanSetShow = () => {
    return <div>กำหนดระดับพัดลมระบายอากาศ</div>;
  };

  return (
    <div>
      <div>
        <div>
          <Popconfirm
            placement="bottom"
            title={<FanSetShow />}
            description={<FanValue />}
            open={open}
            onConfirm={edited}
            okButtonProps={{
              loading: confirmLoading,
            }}
            onCancel={handleCancel}
          >
            <Button type="primary" onClick={showPopconfirm}>
              แก้ไข
            </Button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default FanSet;

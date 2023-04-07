import { useState } from "react";
import { Image } from "antd";
import { Button, Popconfirm } from "antd";

import Heater from "./Heater";
import HeaterValue from "./HeaterValue";
const HeaterSet = () => {
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

  const HeaterSetShow = () => {
    return <div>กำหนดระดับฮีตเตอร์</div>;
  };

  return (
    <div>
      <div>
        <div>
          <Popconfirm
            placement="bottom"
            title={<HeaterSetShow />}
            description={<HeaterValue />}
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

export default HeaterSet;

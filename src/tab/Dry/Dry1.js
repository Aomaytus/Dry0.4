import { useState } from "react";
import { Image } from "antd";
import { Button, Popconfirm } from "antd";
import Add from "./Add";
import Temp from "./Temp";
import Humidity from "./Humidity";
import Time from "./Time";
import Staple from "./Staple";
import AddWeighing1 from "./AddWeighing1";
import StapleValue1 from "./StapleValue1";
import StateOnOff from "../Setting/StateOnOff";
const Dry1 = () => {
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

  return (
    <div>
      <div className="value_home">
        <div className="dry-body">
          <div className="toggle">
            <Button style={{ display: "flex" }}>
              เปิด ปิดชุดชั่งน้ำหนักที่ 1
              <StateOnOff />
            </Button>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button type="primary" onClick={showPopconfirm}>
              แก้ไข
            </Button>
            <Popconfirm
              placement="left"
              title="กำหนดค่าตากแห้ง"
              description={<AddWeighing1 />}
              open={open}
              onConfirm={edited}
              okButtonProps={{
                loading: confirmLoading,
              }}
              onCancel={handleCancel}
            ></Popconfirm>
          </div>

          <StapleValue1 />
        </div>
      </div>
    </div>
  );
};

export default Dry1;

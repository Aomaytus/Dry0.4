import { useState } from "react";
import { Image } from "antd";
import { Button, Popconfirm } from "antd";
import Add from "./Add";


const Dry = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="value_home">
        <div style={{ textAlign: "right", width: "95%" }}>
          <Popconfirm style={{width:'90%'}}
          placement="bottomRight"
            title="กำหนดค่าตากแห้ง"
            description={ <Add/>}
            open={open}
            onConfirm={handleOk}
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
        <p style={{ textAlign: "left", paddingLeft: "20px" }}>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/2100/2100100.png"
          />
          ค่าอุณหภูมิควมคุม 35C
        </p>
        <p style={{ textAlign: "left", paddingLeft: "20px" }}>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/8923/8923689.png"
          />
          ค่าความชื้นควบคุม 55 %
        </p>
        <p style={{ textAlign: "left", paddingLeft: "20px" }}>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/850/850960.png"
          />
          เริ่มทำงาน 13:00 ถึง 15:00
        </p>
        <p style={{ textAlign: "left", paddingLeft: "20px" }}>
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
          />
          วัตถุดิบตากแห้ง กล้วย
        </p>
      </div>
    </div>
  );
};

export default Dry;

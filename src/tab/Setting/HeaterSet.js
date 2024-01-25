import { useState } from "react";
import { Button, Modal } from "antd";
import HeaterValue from "./HeaterValue";
const HeaterSet = () => {
  const showPopconfirm = () => {
    setOpen(true);
  };
  const edited = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  ///////////////////////////
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const HeaterSetShow = () => {
    return <div>กำหนดระดับฮีตเตอร์</div>;
  };
  const warning = () => {
    Modal.warning({
      title: "ปรับระดับความร้อนฮีตเตอร์",
      content: (
        <div>
          <HeaterValue />
        </div>
      ),
      onOk() {},
      cancelText: "ออก",
      okText: "ออก",
      okType: "danger",
    });
  };
  return (
    <div>
      <Button type="primary" onClick={warning}>
        {" "}
        ปรับระดับความร้อนฮีตเตอร์
      </Button>
    </div>
  );
};

export default HeaterSet;

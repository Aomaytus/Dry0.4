import { Button, Popconfirm, Modal } from "antd";
import AddWeighing2 from "./AddWeighing2";
import StartOnOffWeigh2 from "../Setting/StartOnOffWeigh2";
import StapleValue2 from "./StapleValue2";
const Dry2 = () => {
  const warning = () => {
    Modal.warning({
      title: 'กำหนดค่าชุดชั่งน้ำหนัก',
      content: (
        <div>
           <AddWeighing2 />
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
              เปิด ปิดชุดชั่งน้ำหนักที่ 2
              <StartOnOffWeigh2 />
            </Button>
          </div>
          <StapleValue2 />
        </div>
      </div>
    </div>
  );
};

export default Dry2;

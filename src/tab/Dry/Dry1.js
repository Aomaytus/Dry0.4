import { Button, Modal } from "antd";
import AddWeighing1 from "./AddWeighing1";
import StapleValue1 from "./StapleValue1";
import StartOnOffWeigh1 from "../Setting/StartOnOffWeigh1";
const Dry1 = () => {
  const warning = () => {
    Modal.warning({
      title: 'กำหนดค่าชุดชั่งน้ำหนัก',
      content: (
        <div>
           <AddWeighing1 />
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
              เปิด ปิดชุดชั่งน้ำหนักที่ 1
              <StartOnOffWeigh1 />
            </Button>
          </div>
          <StapleValue1 />
        </div>
      </div>
    </div>
  );
};

export default Dry1;

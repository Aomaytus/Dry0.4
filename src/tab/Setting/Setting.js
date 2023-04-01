import React from "react";
import { Switch } from "antd";
import { Image } from "antd";

const Setting = () => {
  return (
    <div>
      <button className="value_home">
        <p
          style={{
            textAlign: "left",
            padding: "10px",
            marginTop: "-8px",
            marginBottom: "-15px",
          }}
        >
          เปิด ปิดการทำงานอุปกรณ์ในระบบ
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>
            {" "}
            <Image
              width={30}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/2316/2316468.png"
            />
            <p>
              <p> ฮีตเตอร์ทำความร้อน</p>
              <Switch size="small" defaultChecked />
            </p>
          </p>
          <p>
            <Image
              width={30}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/3653/3653189.png"
            />
            <p>
                <p>พัดลมระบายอากาศ</p>
              <Switch size="small" defaultChecked />
            </p>
          </p>
        </div>
      </button>
      <div>
       
        <p>
          
        </p>
      </div>
    </div>
  );
};

export default Setting;

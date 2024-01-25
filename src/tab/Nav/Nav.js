import React from "react";
import { Tabs } from "antd";
import Home from "../Home/Home";
import Dry from "../Dry/Dry";
import Setting from "../Setting/Setting";
import { Image } from "antd";
const Nav = () => {
  const add = "add";
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <div style={{ textAlign: "center" }}>
          <span>
            <Image
              width={25}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/3681/3681059.png"
            />
            <div style={{ fontSize: 15 }}>หน้าแรก</div>
          </span>
        </div>
      ),
      children: <Home />,
    },
    {
      key: "2",
      label: (
        <div style={{ textAlign: "center" }}>
          <span>
            <div>
              <Image
                width={25}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/976/976396.png"
              />
              <div style={{ fontSize: 15 }}>การตากแห้ง</div>
            </div>
          </span>
        </div>
      ),
      children: <Dry />,
    },
    {
      key: "3",
      label: (
        <div style={{ textAlign: "center" }}>
          <span>
            <Image
              width={25}
              preview={false}
              src="https://cdn-icons-png.flaticon.com/512/900/900834.png"
            />
            <div style={{ fontSize: 15 }}>ควบคุมอุปกรณ์</div>
          </span>
        </div>
      ),
      children: <Setting />,
    },
  ];
  return (
    <div className="container" style={{ width: "100%" }}>
      <p
        style={{
          marginBottom: "-5px",
          marginTop: "0px",
          fontSize: "20px",
          textAlign: "center",
          paddingLeft: "10px",
          backgroundColor: "#ff543e",
          color: "#f3f3f3",
        }}
      >
        โรงเรือนตากแห้ง
      </p>
      <div className="Nav-icon">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Nav;

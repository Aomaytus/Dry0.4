import React from "react";
import { Tabs } from "antd";
import Home from "../Home/Home";
import Dry from "../Dry/Dry";
import Setting from "../Setting/Setting";
import { FcHome } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { Image } from "antd";
import { FcAddDatabase } from "react-icons/fc";
const Nav = () => {
  const add = "add";
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <span>
          <Image
            width={30}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/3681/3681059.png"
          />
          <div style={{ fontSize: 15 }}>หน้าแรก</div>
        </span>
      ),
      children: <Home />,
    },
    {
      key: "2",
      label: (
        <span>
          <Image
            width={30}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/976/976396.png"
          />
          <div style={{ fontSize: 15 }}>การตากแห้ง</div>
        </span>
      ),
      children: <Dry />,
    },
    {
      key: "3",
      label: (
        <span>
          <Image
            width={30}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/900/900834.png"
          />
          <div style={{ fontSize: 15 }}>ตั้งค่า</div>
        </span>
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
          textAlign: "left",
          paddingLeft: "10px",
          backgroundColor: "#ff543e",
          color:'#f3f3f3'
        }}
      >
        โรงเรือนตากแห้ง
      </p>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{}} />
    </div>
  );
};

export default Nav;

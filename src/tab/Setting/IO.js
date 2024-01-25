import React, { useState, useEffect } from "react";
import Heater from "./Heater";
import Fan from "./Fan";
const IO = () => {
  return (
  
      <div className="dry-body">
        <div
          style={{
            textAlign: "left",
            padding: "10px",
            marginTop: "-8px",
            marginBottom: "-5px",
          }}
        >
          เปิด ปิดการทำงานอุปกรณ์ในระบบ
        </div>
        <div >
          <Heater />
          <Fan />
        </div>
      </div>
   
  );
};

export default IO;

import React from "react";
import IO from "./IO";
import Weigk_setoff from "./Weigk_setoff";
import Weigk_setoff2 from "./Weigk_setoff2";
const Setting = () => {
  return (
    <div className="body">
      <div className="value_home">
        <IO />
        <Weigk_setoff />
        <Weigk_setoff2 />
      </div>
    </div>
  );
};

export default Setting;

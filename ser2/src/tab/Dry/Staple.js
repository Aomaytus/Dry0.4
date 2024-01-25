import React from 'react'
import { Image } from "antd";
const Staple = () => {
  return (
    <div >
  <p >
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
          />
          ชุดชั่งที่ 1 วัตถุดิบตากแห้ง เนื้อหมู
        </p>
        <p >
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักก่อนตาก 100%
        </p>
        <p >
          <Image
            width={20}
            preview={false}
            src="https://cdn-icons-png.flaticon.com/512/6178/6178480.png"
          />
          น้ำหนักหลังตาก 80%
        </p>
    </div>
  )
}

export default Staple
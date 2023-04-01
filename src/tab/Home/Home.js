import React from "react";
import { Progress, Space } from "antd";
import { Carousel } from "antd";
import { Image } from "antd";
const contentStyle = {
  margin: 0,
  height: "auto",
  width: "100%",
  color: "#000000",
  textAlign: "center",
  background: "#f3f3f3",
  borderRadius: "10px",
  display: "flex",
};
const contentStyle2 = {
  margin: 0,
  height: "90px",
  width: "100%",
  color: "#000000",
  textAlign: "center",
  background: "#f3f3f3",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-around",
};
const Home = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <div style={{ marginTop: "-10px" }}>
        <button className="value_home">
          <p
            style={{
              textAlign: "left",
              marginTop: "4px",
              marginBottom: "2px",
            }}
          >
            สภาพแวดล้อมในโรงเรือน
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%" }}>
              <Progress type="circle" percent={75} width={50}  format={(percent) => `${percent} C`}  />
              <p style={{ marginTop: "2px", marginBottom: "2px", }}>อุณหภูมิ</p>
            </div>

            <div style={{ width: "100%" }}>
              <Progress type="circle" percent={75} width={50} />
              <p style={{ marginTop: "2px" , marginBottom: "2px",}}>ความชื้น</p>
            </div>
          </div>
        </button>
        <button className="value_home">
          <p
            style={{
              textAlign: "left",
              marginTop: "4px",
              marginBottom: "2px",
            }}
          >
            สถานะอุปกรณ์ในระบบ
          </p>
          <Carousel afterChange={onChange}>
            <div>
              <p style={contentStyle}>
                <div style={{ width: "100%" }}>
                  <Image
                    width={30}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/2316/2316468.png"
                  />
                  <p style={{ marginTop: "-5px" }}>ทำงานปกติ</p>
                </div>
                <div style={{ width: "100%" }}>
                  <Image
                    width={30}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/3653/3653189.png"
                  />
                  <p style={{ marginTop: "-5px" }}>ทำงานปกติ</p>
                </div>
              </p>
            </div>
            <div>
              <p style={contentStyle}>
                <div style={{ width: "100%" }}>
                  {" "}
                  <Image
                    width={30}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png"
                  />
                  <p style={{ marginTop: "-5px" }}>ทำงานปกติ</p>
                </div>
                <div style={{ width: "100%" }}>
                  <Image
                    width={30}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/2928/2928937.png"
                  />
                  <p style={{ marginTop: "-5px" }}>ทำงานปกติ</p>
                </div>
              </p>
            </div>
          </Carousel>
        </button>
        <button className="value_home">
          <p
            style={{
              textAlign: "left",
              marginTop: "4px",
              marginBottom: "5px",
            }}
          >
            ค่าควมคุมการตากแห้ง
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              {" "}
              <Image
                width={20}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/2100/2100100.png"
              />
              อุณหภูมิ 45C
            </div>{" "}
            <div>
              <Image
                width={20}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/8923/8923689.png"
              />
              ความชื้น 60 %
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around",padding:'10px' }}>
            <div>
              <Image
                width={20}
                preview={false}
                src="https://cdn-icons-png.flaticon.com/512/850/850960.png"
              />
              เวลา เริ่ม 13:00 หยุด 15:00{" "}
            </div>
          </div>
        </button>
        <button className="value_home">
          <Carousel afterChange={onChange}>
            <div>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "4px",
                  marginBottom: "2px",
                  marginLeft: "5px",
                }}
              >
                ชุดชั้งน้ำหนักที่ 1  <Image
                    width={15}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
                  />
              </p>
              <p style={contentStyle2}>
                <div style={{ width: "100%", textAlign: "left" }}>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "2px",
                      marginLeft: "5px",
                    }}
                  >
                    {" "}
                    วัตถุดิบตากแห้ง{" "}
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "2px",
                      marginLeft: "5px",
                    }}
                  >
                    น้ำหนักก่อนตาก
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "2px",
                      marginLeft: "5px",
                    }}
                  >
                    น้ำหนักขณะตาก
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    น้ำหนักแห้ง
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "0px",
                      marginRight: "20px",
                    }}
                  >
                    กล้วย
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "0px",
                      marginRight: "20px",
                    }}
                  >
                    1.5:กก.
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "0px",
                      marginRight: "20px",
                    }}
                  >
                    1.2:กก.
                  </p>
                  <p
                    style={{
                      marginTop: "-5px",
                      marginBottom: "5px",
                      marginRight: "20px",
                    }}
                  >
                    80%
                  </p>
                </div>
              </p>
            </div>
            <div>
              <div>
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "4px",
                    marginBottom: "2px",
                    marginLeft: "5px",
                  }}
                >
                  ชุดชั้งน้ำหนักที่ 2  <Image
                    width={15}
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/7753/7753034.png"
                  />
                </p>
                <p style={contentStyle2}>
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "2px",
                        marginLeft: "5px",
                      }}
                    >
                      {" "}
                      วัตถุดิบตากแห้ง{" "}
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "2px",
                        marginLeft: "5px",
                      }}
                    >
                      น้ำหนักก่อนตาก
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "2px",
                        marginLeft: "5px",
                      }}
                    >
                      น้ำหนักขณะตาก
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "5px",
                        marginLeft: "5px",
                      }}
                    >
                      น้ำหนักแห้ง
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "5px",
                        marginRight: "20px",
                      }}
                    >
                      กล้วย
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "5px",
                        marginRight: "20px",
                      }}
                    >
                      1.5:กก.
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "5px",
                        marginRight: "20px",
                      }}
                    >
                      1.2:กก.
                    </p>
                    <p
                      style={{
                        marginTop: "-5px",
                        marginBottom: "5px",
                        marginRight: "20px",
                      }}
                    >
                      80%
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </Carousel>
        </button>
      </div>
    </div>
  );
};

export default Home;

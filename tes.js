TempSet = data.Fram.TempSet;
HumSet = data.Fram.HumSet;
HmStart = data.Fram.HmStart;
MinStart = data.Fram.MinStart;
HmStop = data.Fram.HmStop;
MinStop = data.Fram.MinStop;
IO = data.Fram.State_Io;
if (IO >= 1) {
  setState_Io("เปิด");
} else {
  setState_Io("ปิด");
}
scale1 = data.Fram.scale1;
if (scale1 == 1) {
  Weighing1Before = data.Fram.Weighing1BeforeSet;
  Weighing1Behind = data.Fram.Weighing1BehindSet;
  if (Weighing1Before >= 0.0) {
    setWeighingState("ข้อมูลผิดพลาด");
  }
} else {
  Weighing1Before = data.Fram.Weighing1Before;
  Weighing1Behind = data.Fram.Weighing1Behind;
}
Weighing1Percent = data.Fram.Weighing1Percent;
Weighing1Type = data.Fram.Weighing1Type;

scale2 = data.Fram.scale2;
if (scale2 == 1) {
  Weighing2Before = data.Fram.Weighing2BeforeSet;
  Weighing2Behind = data.Fram.Weighing2BehindSet;
  if (Weighing2Before >= 0.0) {
    setWeighingState("ข้อมูลผิดพลาด");
  }
} else {
  Weighing2Before = data.Fram.Weighing2Before;
  Weighing2Behind = data.Fram.Weighing2Behind;
}
Weighing2Percent = data.Fram.Weighing2Percent;
Weighing2Type = data.Fram.Weighing2Type;
return (
  <div>
    <div>ค่าอุณหภูมิ {TempSet + " "}C</div>
    <div>ค่าความชื้น {HumSet + " "}%</div>
    เริ่มทำงาน {HmStart + ":" + MinStart + " ถึง "
      + HmStop + ":" + MinStop}
    <div className="">สถานะ โหมดการควบคุม {State_Io}</div>
    <div className="BT_View_ON_OFF">
      สถานะการทำงานชุดชั่งน้ำหนักที่ 1 {WeighingState}
    </div>
    <div style={contentStyle2}>
      <div>
        <div> วัตถุดิบตากแห้ง </div>
        <div>น้ำหนักก่อนตาก</div>
        <div>น้ำหนักหลังตาก</div>
        <div>น้ำหนักแห้ง</div>
      </div>
      <div style={{ textAlignLast: "right" }}>
        <div>{WeighingType}</div>
        <div>{Weighing1Before + " "}กก.</div>
        <div>{Weighing1Behind + " "}กก.</div>
        <div>{Weighing1Percent} %</div>
      </div>
    </div>
    <div className="BT_View_ON_OFF">
      สถานะการทำงานชุดชั่งน้ำหนักที่ 2 {WeighingState}
    </div>
    <div style={contentStyle2}>
      <div>
        <div> วัตถุดิบตากแห้ง </div>
        <div>น้ำหนักก่อนตาก</div>
        <div>น้ำหนักหลังตาก</div>
        <div>น้ำหนักแห้ง</div>
      </div>
      <div style={{ textAlignLast: "right" }}>
        <div>{WeighingType}</div>
        <div>{Weighing2Before + " "}กก.</div>
        <div>{Weighing2Behind + " "}กก.</div>
        <div>{Weighing2Percent} %</div>
      </div>
    </div>
  </div>
);

OutTemp = data.Fram.OutTemp;
if (OutTemp <= 0 || OutTemp >= 80) {
  OutTemp = 0;
}
OutHum = data.Fram.OutHum;
if (OutHum <= 0 || OutHum >= 80) {
  OutHum = 0;
}
InTemp = data.Fram.InTemp;
if (InTemp >= 80 || InTemp <= 15) {
  InTemp == 0;
}
InHum = data.Fram.InHum;
if (InHum <= 0 || InHum >= 99) {
  InHum = 0;
}
return (
  <div>
    <Progress
      type="circle"
      percent={OutTemp}
      width={50}
      strokeColor={{
        "100%": "#ff4415d3",
      }}
      format={(percent) => `${percent} C`}
    />
    <div style={{ marginTop: "2px", marginBottom: "2px" }}>อุณหภูมิ</div>
    <Progress
      type="circle"
      percent={OutHum}
      width={50}
      format={(percent) => `${percent} %`}
    />
    <div style={{ marginTop: "2px", marginBottom: "2px" }}>ความชื้น</div>
    <Progres
      stype="circle"
      percent={InTemp}
      width={50}
      strokeColor={{ "100%": "#ff4415d3" }}
      format={(percent) => `${percent} C`}
    />
    <div style={{ marginTop: "2px", marginBottom: "2px" }}>อุณหภูมิ</div>
    <Progress
      type="circle"
      percent={InHum}
      width={50}
      format={(percent) => `${percent} %`}
    />
    <div style={{ marginTop: "2px", marginBottom: "2px" }}>ความชื้น</div>
  </div>
);
const data = snapshot.val();
FanPercentage = data.Fram.FanPercentage;
if (FanPercentage < 0 || FanPercentage > 100) {
  FanPercentage = -1;
}
const data = snapshot.val();
HeaterPercentage = data.Fram.HeaterPercentage;
if (HeaterPercentage < 0 || HeaterPercentage > 100) {
  HeaterPercentage = -1;
}
return (
  <div>
    <Progress
      type="circle"
      percent={HeaterPercentage}
      size={30}
      strokeColor={{
        "100%": "#87d068",
      }}
    />
    <Progress
      type="circle"
      percent={FanPercentage}
      size={30}
      strokeColor={{
        "100%": "#87d068",
      }}
    />
  </div>
);
const [pig, setpig] = useState(true);
const [banana, setbanana] = useState(true);
const togglepig = () => {
  setbanana(true);
  setpig(false);
  var Weighing1Type = 0;
  update(ref(db, `Fram`), { Weighing1Type, });
};
const togglebanana = () => {
  setpig(true);
  setbanana(false);
  var Weighing1Type = 1;
  update(ref(db, `Fram`), { Weighing1Type, });
};
const set = () => {
  var scale1 = 1;
  update(ref(db, `Fram`), { scale1, });
};
const set_default = () => {
  var scale1 = 0;
  update(ref(db, `Fram`), { scale1, });
};
const [inputValue1, setInputValue1] = useState(0.1);
const heaterset = (newValue) => {
  setInputValue1(newValue);
  console.log("inputValue1 " + inputValue1);
  var Weighing1BeforeSet = inputValue1;
  update(ref(db, `Fram`), { Weighing1BeforeSet, });
};
const [inputValue2, setInputValue2] = useState(0.1);
const onChange2 = (newValue) => {
  setInputValue2(newValue);
  console.log("inputValue2 " + inputValue2);
  var Weighing1BehindSet = inputValue2;
  update(ref(db, `Fram`), { Weighing1BehindSet, });
};

const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
return (
  <div >
    <Checkbox checked={!pig} onClick={togglepig} />
    เนื้อหมู
    <Checkbox checked={!banana} onClick={togglebanana} />
    กล้วย
    <Slider min={0.01} max={50} onChange={heaterset}
      value={typeof inputValue1 === "number" ? inputValue1 : 1} step={0.01} />
    <InputNumber min={0.01} max={50} value={inputValue1} onChange={heaterset} />

    น้ำหลักหลังตาก

    <Slider min={0.01} max={50} onChange={onChange2}
      value={typeof inputValue2 === "number" ? inputValue2 : 1} step={0.01} />
    <InputNumber min={0.01} max={50} value={inputValue2} onChange={onChange2} />
    <Button type="primary" onClick={set}>
      บันทึก
    </Button>
  </div>
);


const [inputValueTemp, setinputValueTemp] = useState(40);
const onChange = (newValue) => {
  setinputValueTemp(newValue);
};
const [inputValueTempHum, setinputValueTempHum] = useState(45);
const heaterset = (newValue) => {
  setinputValueTempHum(newValue);
};
var TempSet = inputValueTemp;
var HumSet = inputValueTempHum;
update(ref(db, `Fram`), { TempSet, HumSet });
const HMStart = (value) => {
  var HmStart = value;
  update(ref(db, `Fram`), { HmStart });
  console.log("changed", value);
};
const MINStart = (value) => {
  var MinStart = value;
  update(ref(db, `Fram`), { MinStart });
  console.log("changed", value);
};
const HMStop = (value) => {
  var HmStop = value;
  update(ref(db, `Fram`), { HmStop });
  console.log("changed", value);
};
const MINStop = (value) => {
  var MinStop = value;
  update(ref(db, `Fram`), { MinStop });
  console.log("changed", value);
};
return (
  <div>
    <InputNumber min={0} max={24} defaultValue={0} prefix="ชั่วโมง:" onChange={HMStart} />
    <InputNumber min={0} max={59} defaultValue={0} prefix="นาที:" onChange={MINStart} />
    <InputNumber min={0} max={24} defaultValue={0} prefix="ชั่วโมง:" onChange={HMStop} />
    <InputNumber min={0} max={59} defaultValue={0} prefix="นาที:" onChange={MINStop} />
    <Slider min={30} max={70} onChange={onChange}
      value={typeof inputValueTemp === "number" ? inputValueTemp : 40} />
    <InputNumber min={30} max={70} value={inputValueTemp} onChange={onChange} />
    <Slider min={10} max={100} onChange={heaterset}
      value={typeof inputValueTempHum === "number" ? inputValueTempHum : 40} />
    <InputNumber min={10} max={100} value={inputValueTempHum} onChange={heaterset} />
  </div>
);




const [HeaterPercentage, setHeaterPercentage] = useState(50);
const [FanPercentage, setFanPercentage] = useState(50);
setHeaterPercentage(data.Fram.HeaterPercentage)
setFanPercentage(data.Fram.FanPercentage);
const heaterset = (newValue) => {
  setHeaterPercentage(newValue);
};
const fanset = (newValue) => {
  setFanPercentage(newValue);
};
const heatersetup = () => {
  update(ref(db, `Fram`), {
    HeaterPercentage,
  });
};
const fansetup = () => {
  update(ref(db, `Fram`), {
    FanPercentage,
  });
}
return (
  <div>
    <Slider
      min={0}
      max={100}
      onChange={heaterset}
      value={typeof HeaterPercentage === "number" ? HeaterPercentage : 1}
      step={1}
    />
    <InputNumber min={0} max={100} value={HeaterPercentage + "%"}
      onChange={heaterset}
    />
    <Slider min={0} max={100} onChange={fanset}
      value={typeof FanPercentage === "number" ? FanPercentage : 1}
      step={1} />
    <InputNumber min={0} max={100} value={FanPercentage + "%"}
      onChange={heaterset} />
    <Button onClick={heatersetup} type="primary">บันทึก</Button>
    <Slider
      min={0}
      max={100}
      onChange={fanset}
      value={typeof HeaterPercentage === "number" ? HeaterPercentage : 1}
      step={1}
    />
    <InputNumber min={0} max={100} value={HeaterPercentage + "%"}
      onChange={fanset}
    />
    <Slider min={0} max={100} onChange={fanset}
      value={typeof FanPercentage === "number" ? FanPercentage : 1}
      step={1} />
    <InputNumber min={0} max={100} value={FanPercentage + "%"}
      onChange={fanset} />
    <Button onClick={fansetup} type="primary">บันทึก</Button>
  </div>
);
const Weigk_setoff = () => {
  const [disabled, setDisabled] = useState(false);
  const [we1, setWe1] = useState(0);
  const [we2, setWe2] = useState(0);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ST_IO_ch1 = data.Fram.State_Io_Weigh1_SC;
        setDisabled(ST_IO_ch1 === 2);
        setWe1((data.Fram.hx711_1_scale / 1000).toFixed(2));
        const ST_IO_ch2 = data.Fram.State_Io_Weigh2_SC;
        setDisabled(ST_IO_ch2 === 2);
        setWe1((data.Fram.hx711_2_scale / 1000).toFixed(2));
      }
    });
  }, []);

  const State_Io_Weigh1 = (checked) => {
    update(ref(db, `Fram`), { State_Io_Weigh1_SC: checked ? 2 : 1 });
  };
  const State_Io_Weigh2 = (checked) => {
    update(ref(db, `Fram`), { State_Io_Weigh2_SC: checked ? 2 : 1 });
  };

  return (
    <div >
      <div className="dry-body-one">{we1} กก.</div>
      <div>ชุดชั่งที่ 1</div>
      <Switch>
        onChange={State_Io_Weigh1}
      </Switch>
      <div className="dry-body-one">{we2} กก.</div>
      <div>ชุดชั่งที่ 2</div>
      <Switch>
        onChange={State_Io_Weigh2}
      </Switch>
    </div>

  );
};
var token_defalue=0;
const LineChang = () => {
  const onChange = (value) => {
    setLineToken(value);
    console.log('Change:', value);
  };

  const [LineToken, setLineToken] = useState();
  const [todos, setTodos] = useState();
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      token_defalue = (data.Line.TOKEN1);
    });
  }, []);

  const fansetup = () => {
    var TOKEN1 = LineToken;
    update(ref(db, `Line`), {
      TOKEN1,
    });
  }
  return (
    <div>
      <div >
        {token_defalue}
      </div>
      <Mentions onChange={onChange} />
      <Button onClick={fansetup}>บันทึก</Button>
    </div>
  );
};

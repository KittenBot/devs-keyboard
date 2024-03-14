import { KeyboardClient, LedStripLightType, LedVariant, gpio } from "@devicescript/core";
import { startLed } from "@devicescript/drivers";
import { hid2idx } from "./utils/ledmap";

//初始化键盘内led灯
const led = await startLed({
    length: 13*5,
    columns: 5,
    variant: LedVariant.Strip,
    hwConfig: { type: LedStripLightType.WS2812B_GRB, pin: gpio(7) },
})
await led.showAll(0) //0为灭灯状态 设置全灭灯

//初始化键盘
const kb = new KeyboardClient()
//获取等待像素
const pixels = await led.buffer()

//用于存放最后一次亮灯的位置
let lastLightNum = 0
//用于存放最后一次亮灯的自动灭灯事件
let lastClearLight: number = null

//监听按键被按下事件，长按会一直触发
kb.down.subscribe(async (key) => {
    //hid2idx[key]：被按下按键的位置
    if (hid2idx[key]) {
        if(lastClearLight && lastLightNum===hid2idx[key]){
          //若长按按键则清除灭灯事件
          clearTimeout(lastClearLight)
        }else{
          let lastLight = hid2idx[key]
          //设置 被按下按钮 发光的颜色为红色
          pixels.setAt(hid2idx[key], 0xff0000)
          // advanced: 将发光的颜色设置为 随机颜色
          // pixels.setAt(hid2idx[key], getRandomColor())
          await led.show();
        }
        
        //设置自动灭灯事件
        lastClearLight =  setTimeout(async()=>{
          pixels.setAt(hid2idx[key], 0)
          await led.show();
          lastClearLight = null
        },400)
    }
  })
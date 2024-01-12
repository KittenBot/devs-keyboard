import { RotaryEncoder, VibrationMotor } from "@devicescript/core";
import { SSD1306Driver } from "@devicescript/drivers"

const rot = new RotaryEncoder()
const vibrationMotor = new VibrationMotor()
const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()

//记录旋钮初始值
let pos = await rot.reading.read()
//显示初始屏幕
ssd.image.fill(0)
ssd.image.drawRect(0, 0, 128, 64, 1)
ssd.image.print(`Intensity: 0`, 3, 10)
await ssd.show()

rot.reading.subscribe(async (v) => {
  //当数值改变时才进行振动
  if (v !== pos) {
    //振动强度0～1
    await vibrationMotor.vibrate(10,v/10)
    ssd.image.fill(0)
    ssd.image.drawRect(0, 0, 128, 64, 1)
    ssd.image.print(`Intensity: ${v/10}`, 3, 10)
    await ssd.show()
    pos = v
  }
})
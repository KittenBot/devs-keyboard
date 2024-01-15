import { Button, Relay, sleep } from "@devicescript/core"
import { SSD1306Driver } from "@devicescript/drivers"

const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()
const btn = new Button()
//实例化继电器
const relay = new Relay()
//记录继电器通电情况
let enabled = false

const showEnable = async()=>{
  //显示继电器是否通电 的函数
  const value = await relay.enabled.read()
  enabled = value
  ssd.image.fill(0)
  ssd.image.drawRect(0, 0, 128, 64, 1)
  ssd.image.print(`Enabled: ${value}`, 3, 10)
  await ssd.show()
}

btn.down.subscribe(async()=>{
  //更改继电器通电状态
  await relay.enabled.write(!enabled)
  await showEnable()
})
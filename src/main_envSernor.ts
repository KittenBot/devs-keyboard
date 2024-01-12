import { SSD1306Driver } from "@devicescript/drivers"
import { sleep } from "@devicescript/core"
import { Humidity,Temperature } from "@devicescript/core"

const humidity = new Humidity()
const temperature = new Temperature()
const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()

while(1){
  const hum = await humidity.reading.read()
  const tem = await temperature.reading.read()
  ssd.image.fill(0)
  ssd.image.drawRect(0, 0, 128, 64, 1)
  ssd.image.print(`Temp:${Math.round(tem)}°C`, 3, 10)
  ssd.image.print(`Hum:${Math.round(hum)}%RH`, 3, 25)
  await ssd.show()
  await sleep(500)
}
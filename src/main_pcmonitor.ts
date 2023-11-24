import * as ds from "@devicescript/core"
import { SSD1306Driver } from "@devicescript/drivers"

const mon = await new ds.PCMonitor()

const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()
ssd.image.print("hello world", 3, 10)
await ssd.show()

while(1){
    const cpuUsage = await mon.cpuUsage.read()
    const ramUsage = await mon.ramUsage.read()

    ssd.image.fill(0)
    ssd.image.print(`cpu: ${cpuUsage}%`, 3, 20)
    ssd.image.print(`ram: ${ramUsage}%`, 3, 30)
    await ssd.show()

    await ds.sleep(500)
}

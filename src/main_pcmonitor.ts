import * as ds from "@devicescript/core"
import { SSD1306Driver } from "@devicescript/drivers"

const mon = await new ds.PCMonitor()

const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()

while(1){
    const cpuUsage = await mon.cpuUsage.read()
    const ramUsage = await mon.ramUsage.read()
    const [gpuUsage, gpuTemp] = await mon.gpuInfo.read()

    ssd.image.fill(0)
    // draw border
    ssd.image.drawRect(0, 0, 128, 64, 1)
    // system info
    ssd.image.print(`CPU: ${cpuUsage}%`, 3, 10)
    ssd.image.print(`GPU: ${gpuUsage}%  ${gpuTemp}C`, 3, 20)
    ssd.image.print(`RAM: ${ramUsage}%`, 3, 30)
    // network speed

    ssd.image.drawLine(0, 38, 128, 38, 1)
    const [tx, rx] = await mon.netInfo.read()
    ssd.image.print(`RX: ${rx} KB/s`, 3, 40)
    ssd.image.print(`TX: ${tx} KB/s`, 3, 50)

    await ssd.show()

    await ds.sleep(500)
}

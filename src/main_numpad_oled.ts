import { SSD1306Driver } from "@devicescript/drivers"
import { configureHardware } from "@devicescript/servers"
import { pins } from "@dsboard/pico"

const ssd = new SSD1306Driver({ width: 128, height: 64, devAddr: 0x3C as any })
await ssd.init()
ssd.image.print("hello world", 3, 10)
await ssd.show()





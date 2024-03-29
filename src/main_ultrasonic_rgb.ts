// This demo use ultrasonic module distance to vary keyboard light color.

import * as ds from "@devicescript/core"
import { startLed } from "@devicescript/drivers"

// 使用超声波模块读取距离，之后将距离映射到颜色并在键盘上显示
// use ultrasonic module to read distance, then map distance to color and show on keyboard

const ultrasonic = new ds.Distance()

const led = await startLed({
    length: 13*5,
    columns: 5,
    variant: ds.LedVariant.Strip,
    hwConfig: { type: ds.LedStripLightType.WS2812B_GRB, pin: ds.gpio(7) },
})
await led.showAll(0)
await ds.sleep(1000)
const pixels = await led.buffer()
pixels.setAt(0, 0xff0000)

let color = 0xff0000
await led.showAll(color)

setInterval(async () => {
    let distance = await ultrasonic.reading.read()
    distance = Math.map(distance * 100, 0, 100, 0, 255)
    if (distance > 255)
        distance = 255
    // map 0 ~ 255 cm to blue ~ red
    let red = Math.floor(distance) & 0xff
    let blue = 255 - red
    color = (red << 16) | (blue)
    // console.log("color", red, blue, color)
    await led.showAll(color)
}, 30)

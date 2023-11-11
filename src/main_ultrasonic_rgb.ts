// This demo use ultrasonic module distance to vary keyboard light color.

import * as ds from "@devicescript/core"
import { startLed } from "@devicescript/drivers"

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
let distance = 0
ultrasonic.reading.subscribe(async (d) => {
    distance = Math.map(d * 100, 0, 100, 0, 255)
    if (distance > 255)
        distance = 255
})

setInterval(async () => {
    // map 0 ~ 255 cm to blue ~ red
    let red = Math.floor(distance) & 0xff
    let blue = 255 - red
    color = (red << 16) | (blue)
    // console.log("color", red, blue, color)
    await led.showAll(color)
}, 100)

import * as ds from "@devicescript/core"

import { startLed } from "@devicescript/drivers"
import { Palette } from "@devicescript/graphics"
import { startLedDisplay } from "@devicescript/runtime"

const led = new ds.Led()

const mon = new ds.PCMonitor()
const display = await startLedDisplay(led, Palette.leds())

setInterval(async () => {
    const data = await mon.pixel.read()
    const width = display.image.width
    const n = data.length
    // copy data to display, each byte is 2 pixels
    for (let i = 0; i < n; ++i) {
        const x = i % width
        const y = Math.floor(i / width) * 2
        const c = data[i] & 0x0f
        display.image.set(x, y, c)
        const c2 = (data[i] & 0xf0) >> 4
        display.image.set(x, y + 1, c2)
    }
    await display.show()
}, 50)


// const n = display.palette.length
// let k = 0
// for (let y = 0; y < 5; ++y)
//     for (let x = 0; x < 5; ++x) 
//         await display.image.set(x, y, k++ % n)
// await display.show()

import * as ds from "@devicescript/core"
import { fillRainbow } from "@devicescript/runtime"

const encoder = new ds.RotaryEncoder()
const led = new ds.Led()

const pixels = await led.buffer()

pixels.setAt(0, 0xff0000)
fillRainbow(pixels, {
    brightness: 64
})
await led.show()

let pos = await encoder.reading.read()

encoder.reading.subscribe(async (v) => {
    if (v !== pos) {
        if (v > pos){
            await pixels.rotate(1)
        } else {
            await pixels.rotate(-1)
        }
        pos = v
        await led.show()
    }
})


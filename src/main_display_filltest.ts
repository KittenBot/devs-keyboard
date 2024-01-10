import * as ds from "@devicescript/core"

import { SDLDisplay } from "./utils/sdl_display"
import { Image } from "@devicescript/graphics"

// rgb565 raw data fill
const img = Image.alloc(480, 360, 16 as any)
const d = new SDLDisplay(img)
await d.init()

let colors = [0xfc06, 0x0fc0, 0x00fc, 0xc00f, 0x0cfc, 0xfc0c]
img.fill(0xf100)
while (true){
    for (let i = 0; i < colors.length; i++){
        img.fill(colors[i])
        await d.show()
        await ds.sleep(1000)
    }
}
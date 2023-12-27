import * as ds from "@devicescript/core"

import { SDLDisplay } from "./utils/sdl_display"
import { Image } from "@devicescript/graphics"

const img = Image.alloc(480, 360, 4)
const d = new SDLDisplay(img)
await d.init()

// basic carousel test
let text = "hello world"
while (true){
    text = ' ' + text
    if (text.length > 20) text = "hello world"
    d.image.print(text, 3, 10, 2)

    await d.show()
    d.image.fill(0)
    await ds.sleep(1000)
}
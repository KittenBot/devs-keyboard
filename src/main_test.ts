import * as ds from "@devicescript/core"

import { SDLDisplay } from "./utils/sdl_display"
import { Image } from "@devicescript/graphics"

const img = Image.alloc(480, 360, 4)
const d = new SDLDisplay(img)
await d.init()

d.image.print("hello world", 3, 10)
await d.show()
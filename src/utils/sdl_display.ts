import * as ds from "@devicescript/core"
import { assert } from "@devicescript/core"
import { Display, Image, Palette } from "@devicescript/graphics"

type DsSpi = typeof ds & {
    spiSendImage(image: Image, palette: Buffer, flags: number): Promise<void>
}

export class SDLDisplay implements Display {
    palette: Palette
    constructor(public image: Image) {
        assert(image.bpp === 4, "SDLDisplay only supports 4bpp images")
        this.image = image
        this.palette = Palette.arcade()
    }
    
    async init() {
        console.log(`SDLDisplay.init()`)
        console.log("image", this.image.width, this.image.height)
    }

    async show() {
        await (ds as DsSpi).spiSendImage(
            this.image,
            this.palette.buffer,
            0x1
        )
    }
}


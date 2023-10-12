import * as ds from "@devicescript/core"
import { startLed } from "@devicescript/drivers"
import { LedStripLightType, LedVariant, gpio, sleep } from "@devicescript/core"
import { hid2idx } from "./utils/ledmap"

const led = await startLed({
    length: 13*5,
    columns: 5,
    variant: LedVariant.Strip,
    hwConfig: { type: LedStripLightType.WS2812B_GRB, pin: gpio(7) },
})

const kb = new ds.KeyboardClient()
await led.showAll(0)
const pixels = await led.buffer()

// 涟漪的状态
let rippleActive = false;
let rippleCenter = 0;
let rippleRadius = 0;
let rippleColor = 0xffffff;

kb.down.subscribe(async (key) => {
    console.log(">>> keyboard down", key)
    if (hid2idx[key]) {
        rippleActive = true;
        rippleCenter = hid2idx[key];
        rippleRadius = 0;
        rippleColor = 0x1f0000;  
    }
})

function ripple() {
    if (rippleActive) {
        for (let i = 0; i < pixels.length; ++i) {
            const dx = i % 13 - rippleCenter % 13;
            const dy = Math.floor(i / 13) - Math.floor(rippleCenter / 13);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < rippleRadius && distance > rippleRadius - 1) {
                pixels.setAt(i, rippleColor);
            } else {
                pixels.setAt(i, 0);
            }
        }
        rippleRadius++;
        if (rippleRadius > 13) {
            rippleActive = false;
        }
    }
}

while (true) {
    ripple();
    await led.show();
    await sleep(50);
}
import * as ds from "@devicescript/core"

import { startHidMouse } from "@devicescript/servers"

const cd = await new ds.PCEvent()
const btn = new ds.Button()
const slider = new ds.Potentiometer()
const mouse = startHidMouse({})

btn.down.subscribe(async () => {
    await cd.openUrl("https://microsoft.github.io/jacdac-docs/clients/makecode/")
})

while(1){
    let v = await slider.reading.read()
    if (v < 0.2){
        await mouse.wheel(-10, 100)
    } else if (v > 0.8){
        await mouse.wheel(10, 100)
    }
    await ds.sleep(300)
}

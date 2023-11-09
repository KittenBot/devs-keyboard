import * as ds from "@devicescript/core"


const cd = await new ds.PCEvent()

const button = new ds.Button()

button.down.subscribe(async () => {
    // await cd.openUrl("https://www.google.com")
    // await cd.startApp("calc.exe")
    await cd.sendText("[捂脸]\n")
})







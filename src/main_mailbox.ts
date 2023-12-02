import * as ds from "@devicescript/core"

const servo = new ds.Servo()
const btn = new ds.Button()

let isOpen = false
await servo.enabled.write(true)

btn.down.subscribe(async () => {
    isOpen = !isOpen
    let angle = isOpen ? 0 : 90
    await servo.angle.write(angle)
})



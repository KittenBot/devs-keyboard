import * as ds from "@devicescript/core"

const servo = new ds.Servo()
const btn = new ds.Button()

let angle = 0

btn.down.subscribe(async () => {
    if (angle = 0){
        angle = 180
        await servo.angle.write(angle)
    } else {
        angle = 0
        await servo.angle.write(angle)
    }
})



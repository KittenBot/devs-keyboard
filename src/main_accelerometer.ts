import { Accelerometer, PCEvent,Button } from "@devicescript/core";

const accelerometer = new Accelerometer()
const pc = new PCEvent()
const btn = new Button()

let isMoving = false
accelerometer.reading.subscribe(async (value) => {
  const x = value[0]
  const y = value[1]
  if(!isMoving){
    isMoving = true
    await pc.moveMouse(`${x},${y}`)
    isMoving = false
  }
})
//按钮按下松开，模拟鼠标按下松开
btn.down.subscribe(async()=>{
  await pc.clickMouse('down')
})
btn.up.subscribe(async()=>{
  await pc.clickMouse('up')
})
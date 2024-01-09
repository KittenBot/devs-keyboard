import { Accelerometer, PCEvent,Button } from "@devicescript/core";

const accelerometer = new Accelerometer()
const pc = new PCEvent()
const btn = new Button()
let interval: number = null
const goLeft = ()=>{
  interval&&clearInterval(interval)
  interval = setInterval(async()=>{
    await pc.moveMouse( 'left' )
  },50)
}
const goRight = ()=>{
  interval&&clearInterval(interval)
  interval = setInterval(async()=>{
    await pc.moveMouse( 'right' )
  },50)
}

accelerometer.tiltLeft.subscribe(() => {
  goLeft()
})
accelerometer.tiltRight.subscribe(() => {
  goRight()
})
accelerometer.faceUp.subscribe(() => {
  interval&&clearInterval(interval)
})

btn.down.subscribe(async()=>{
  await pc.clickMouse()
})
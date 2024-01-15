import { Led,Button,Potentiometer,sleep } from "@devicescript/core";
import { Palette } from "@devicescript/graphics";
import { fillPalette } from "@devicescript/runtime";

const potentiometer = new Potentiometer()
const led = new Led()
const btn = new Button()
const pixels = await led.buffer()


pixels.setAt(2, 0xff0000)
await led.show()

const palette = new Palette(hex`1f0000 001f00 00001f 1f1f00 1f001f 00001f 1f1f1f 000000 1f0000 001f00 00001f 1f1f00 1f001f`)
const colorless = new Palette(hex`000000`)

const fillColor = async(color:Palette)=>{
  fillPalette(pixels, color)
  await led.show()
  await sleep(200)
}
btn.down.subscribe(async()=>{
  const flashing = async()=>{
    for(let i = 0;i<4;i++){
      await fillColor(palette)
      await fillColor(colorless)
    }
  }
  await flashing()

  const randomNum = Math.floor(Math.random() * 8)
  pixels.setAt(randomNum, 0xff0000)
  await led.show()
})

potentiometer.reading.subscribe(async(value)=>{
  await led.intensity.write(value)
})
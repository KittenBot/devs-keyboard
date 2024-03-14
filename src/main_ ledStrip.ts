import { LedStrip } from "@devicescript/core";

const ledStrip = new LedStrip()
const numPixels = 10; // number of LEDs
await ledStrip.numPixels.write(numPixels)//Init ledStrip
await ledStrip.runEncoded("fade # #", 0xff0000, 0xff0fff)
let shift = 0
setInterval(async()=>{
  if(shift===(numPixels-1)) shift = -1
  shift ++
  await ledStrip.runEncoded("rotfwd", shift)
},300)
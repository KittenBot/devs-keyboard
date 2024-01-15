import { LedStrip } from "@devicescript/core";

const ledStrip = new LedStrip()
await ledStrip.numPixels.write(10)
await ledStrip.runEncoded("fade # #", 0xff0000, 0xff0fff)
let shift = 0
setInterval(async()=>{
  if(shift===9) shift = -1
  shift ++
  await ledStrip.runEncoded("rotfwd", shift)
},300)

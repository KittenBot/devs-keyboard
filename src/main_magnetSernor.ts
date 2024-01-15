import { MagneticFieldLevel, sleep } from "@devicescript/core";
import { SSD1306Driver } from "@devicescript/drivers";

const magneticFieldLevel = new MagneticFieldLevel()
const ssd = new SSD1306Driver( { width: 128, height: 64, devAddr: 0x3C as any } )
await ssd.init()

while ( 1 ) {
  const value = await magneticFieldLevel.reading.read()
  ssd.image.fill( 0 )
  // draw border
  ssd.image.drawRect( 0, 0, 128, 64, 1 )
  ssd.image.print( `magneticField: ${value} T`, 3, 10 )
  await ssd.show()
  await sleep( 500 )
}
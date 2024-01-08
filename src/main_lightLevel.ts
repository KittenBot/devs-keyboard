import { LightLevel, Servo } from "@devicescript/core";

const lightLevel = new LightLevel()
const servo = new Servo()
await servo.enabled.write( true )

setInterval( async () => {
  const value = await lightLevel.reading.read();
  if ( value > 0.5 ) {
    await servo.angle.write( 180 )
  } else {
    await servo.angle.write( 0 )
  }
}, 500 )
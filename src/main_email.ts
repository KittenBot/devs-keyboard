import * as ds from "@devicescript/core"

const email = new ds.EmailClient()
const servo = new ds.Servo()
const button = new ds.Button()
await servo.angle.write(0)

const body = JSON.stringify({
  email: '389743545@qq.com', // email address
  password: 'sffnfqcqvcjpcabi', // email password
})

await email.openListen(body)

email.listen.subscribe(async()=>{
  
  await servo.angle.write(90)
})

button.down.subscribe(async()=>{
  await servo.angle.write(0)
});

button.hold.subscribe(async()=>{
  await email.closeListen()
})

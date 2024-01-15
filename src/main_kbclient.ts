import * as ds from "@devicescript/core"

// test over keyboard client, you can subscribe to client on other device and remap key to local hid service

const kb = new ds.KeyboardClient()

kb.down.subscribe(async (key) => {
    console.log(">>> keyboard down", key)
})

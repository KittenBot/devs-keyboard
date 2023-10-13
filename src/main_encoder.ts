// In the application, we use a rotatory encoder to control the volume of the
// sound. This file contains the code that reads the encoder and emits events
// when the volume is changed.

import * as ds from "@devicescript/core"
import {
    HidKeyboardAction as ACT,
    HidKeyboardModifiers as MOD,
    HidKeyboardSelector as KEY,
} from "@devicescript/core"
import { startHidKeyboard } from "@devicescript/servers"



const rot = new ds.RotaryEncoder()
const keyboard = startHidKeyboard({})

let pos = await rot.reading.read()

rot.reading.subscribe(async (v) => {
    if (v !== pos) {
        if (v > pos){
            await keyboard.key(KEY.VolumeUp, 0, ACT.Press)
        } else {
            await keyboard.key(KEY.VolumeDown, 0, ACT.Press)
        }
        pos = v
    }
})

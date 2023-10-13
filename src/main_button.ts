// This demo use an extra jacdac button module to act as a keyboard button.
// you can program the button to run any key macro.

import * as ds from "@devicescript/core"
import {
    HidKeyboardAction as ACT,
    HidKeyboardModifiers as MOD,
    HidKeyboardSelector as KEY,
} from "@devicescript/core"
import { startHidKeyboard } from "@devicescript/servers"

const keyboard = startHidKeyboard({})
const btn = new ds.Button()

const char2hid = (c: number) => {
    if (c >= 97 && c <= 122)
        return c - 97 + KEY.A
    if (c > 48 && c <= 57) // 1-9
        return c - 49 + KEY._1
    if (c === 48)
        return KEY._0
    if (c === 32)
        return KEY.Spacebar
    return 0
}

const txt = "hello world"
btn.down.subscribe(async () => {
    // send a string
    for (let i=0;i<txt.length;++i) {
        const c = char2hid(txt.charCodeAt(i))
        // console.log("sending", txt[i], c)
        if (c > 0){
            await keyboard.key(c, 0, ACT.Down)
            await ds.sleep(50)
            await keyboard.key(c, 0, ACT.Up)
            await ds.sleep(50)
        }
    }
})

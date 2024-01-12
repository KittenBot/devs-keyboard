import {
    Button, HidKeyboardAction,
    HidKeyboardModifiers,
    HidKeyboardSelector
} from "@devicescript/core"
import { startHidKeyboard } from "@devicescript/servers"

const btn1 = new Button()
const btn2 = new Button()

const keyboard = startHidKeyboard( {} )
let modifier = HidKeyboardModifiers.LeftGUI

//copy
btn1.down.subscribe( async () => {
    const selector = HidKeyboardSelector.C
    console.log( selector )
    console.log("ctrl+c")
    await keyboard.key( selector, modifier, HidKeyboardAction.Press )
} )

//paste
btn2.down.subscribe(async()=>{
    const selector = HidKeyboardSelector.V
    console.log( selector )
    console.log("ctrl+v")
    await keyboard.key( selector, modifier, HidKeyboardAction.Press )
})
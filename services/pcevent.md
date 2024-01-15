# PC event

    identifier: 0x113d0987
    extends: _sensor

Send various events to PC, including opening a URL, start an app, sending text, etc.

## Commands

    command open_url @ 0x80 {
        url: string
    }

Open a URL in the default browser.

    command start_app @ 0x81 {
        app: string
    }

Start an app.

    command send_text @ 0x82 {
        text: string
    }

Send text to the active window.

    command run_script @ 0x83 {
        script: string
    }

Run a script.

    command move_mouse @ 0x84 {
       position: string
    }

Move mouse with accelerometer.

    command click_mouse @ 0x85 {
       click: string
    }

Make the mouse click.

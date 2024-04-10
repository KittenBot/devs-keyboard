# Email Client

    identifier: 0x18627b16
    extends: _sensor

Measures PC Email.
## Commands

    command open_listen @ 0x89 {
        data: string
    }

    command close_listen @ 0x90{}

## Events

    event listen @ 0x81 {
        data: string
    }

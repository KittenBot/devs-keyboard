# PC monitor

    identifier: 0x18627b15
    extends: _sensor

Measures PC monitor.

## Registers

    ro pixel: bytes / @ 0x180

Pixel data. Return in led palette format.

    rw pixel_format: u8 @ 0x81

Pixel format.

    rw width: u16 @ 0x82

Width of the monitor in pixels.

    rw height: u16 @ 0x83

Height of the monitor in pixels.

    rw monitor: u16 @ 0x85

Monitor to measure.

    ro cpu_usage: u8 @ 0x190

CPU usage in percent.

    ro cpu_temp: u8 @ 0x191

CPU temperature in Celsius.

    ro ram_usage: u8 @ 0x192

RAM usage in percent.

    ro gpu_info @ 0x193 {
        usage: u8
        temp: u8
    }

GPU info.

    ro net_info @ 0x195 {
        tx: u16
        rx: u16
    }

Network transmit/receive speed in Kbytes per second.

A measure of PC monitor.

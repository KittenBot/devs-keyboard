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

    ro ram_usage: u8 @ 0x192

RAM usage in percent.

    ro gpu_usage: u8 @ 0x193

GPU usage in percent.

    ro network_tx: u32 @ 0x194

Network transmit speed in Kbytes per second.

    ro network_rx: u32 @ 0x198

Network receive speed in Kbytes per second.

    

A measure of PC monitor.

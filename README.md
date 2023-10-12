# Jacdac Keyboard Application

This project uses [DeviceScript](https://microsoft.github.io/devicescript/).

## Getting Started

### Firmware update

There is a `devicescript-rp2040-kitten_mkc.uf2` file in the root of this repository.

- Please hold the `RESET` button on the bottom for a few seconds before release to enter bootloader mode.
- Drag and drop the uf2 file to the `RPI` drive.

### Prerequisites

- Install devicescript extension in VSCode
- Open this folder in VSCode

### Running the application
- Connect your keyboard to your computer
- Select `Devicescript` extension in the left panel
- Click `Connect Device` and select your keyboard
- Open one of the `main_someapp.ts` files in the `src` folder
- Click `Devicescript: Run` in the top right corner of the editor


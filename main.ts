let millivolts = 0
basic.forever(function () {
    millivolts = Math.ceil(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    basic.showNumber(millivolts)
    serial.writeNumber(millivolts)
})
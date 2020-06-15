let millivolts = 0
basic.forever(function () {
    millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    basic.showNumber(millivolts)
    serial.writeValue("Millivolts", millivolts)
})

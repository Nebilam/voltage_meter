let knop = 0
let millivolts = 0
input.onButtonPressed(Button.A, function () {
    knop = 0
})
input.onButtonPressed(Button.B, function () {
    knop = 1
})
basic.forever(function () {
    if (knop == 0) {
        millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    } else {
        millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * 1000 / 340)
    }
    basic.showNumber(millivolts)
    serial.writeValue("Millivolts", millivolts)
})

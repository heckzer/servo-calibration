input.onButtonPressed(Button.A, function () {
    if (x2A) {
        x2A = false
    } else {
        expireA = input.runningTime() + x2ms
        while (input.runningTime() < expireA && !(x2A)) {
            if (input.buttonIsPressed(Button.A)) {
                x2A = true
            }
        }
        if (x2A) {
            speedLeft += 1
        } else {
            speedLeft += 0 - 1
        }
        proportionalFont.showString("L" + speedLeft + "   ", 150)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    speedLeft = 90
    speedRight = 90
    expireA = 0
    expireB = 0
    x2A = false
    x2B = false
    proportionalFont.showString("GO  ", 150)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (x2B) {
        x2B = false
    } else {
        expireB = input.runningTime() + x2ms
        while (input.runningTime() < expireB && !(x2B)) {
            if (input.buttonIsPressed(Button.B)) {
                x2B = true
            }
        }
        if (x2B) {
            speedRight += 1
        } else {
            speedRight += 0 - 1
        }
        proportionalFont.showString("R" + speedRight + "   ", 150)
        basic.clearScreen()
    }
})
let x2B = false
let expireB = 0
let expireA = 0
let x2A = false
let x2ms = 0
let speedRight = 0
let speedLeft = 0
speedLeft = 90
speedRight = 90
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
servos.P1.setRange(0, 180)
servos.P2.setRange(0, 180)
servos.P1.setPulse(1500)
servos.P2.setPulse(1500)
strip.setPixelColor(0, NeoPixelColors.Yellow)
strip.setPixelColor(1, NeoPixelColors.Orange)
strip.setPixelColor(2, NeoPixelColors.Red)
strip.setPixelColor(3, NeoPixelColors.Violet)
strip.setPixelColor(4, NeoPixelColors.Blue)
strip.show()
x2ms = 300
basic.showIcon(IconNames.Happy)
music.setVolume(10)
music.playMelody("A F E F D G E F ", 420)
// **** SERVO CALIBRATION ***
// 
// This project helps with calibrating 360° servos for microbit. 
// The purpose is to quickly identify the optimum degrees, so the servos will rotate synchronously as much as possible and your bot can move in a straight line as much as possible. 
// 
// Download the project to your microbit that has servos connected to P1 and P2.
// 
// Press button A to increase speed forward of right servo. 
// Press button B to increase speed forward of left servo. 
// Each button press increases speed by 1 (decrementing the angle starting from 90). 
// Repeat until your bot moves in a straight line. 
// Do not forget to note down your optimal values of left and right speeds. 
// 
// Double press button A to decrease speed forward of right servo. 
// Double press button B to decrease speed forward of left servo. 
// Each double button press decreases speed by 1.
// 
// Press button A+B together to reset speed to 90 (no movement). If your bot still moves when speeds are set to 90 then your servos require manual calibration by their calibration screw. 
// 
// In my tests, speeds of left and right servo usually differed by 1 to 5 increments. Sometimes, optimum speeds still produced a slightly curved path. In that case it may help to try tweaking values of pulse width. 
// 
// ----------------------------------------------
// This project reuses the doubleclick project: https://makecode.microbit.org/94148-97132-74143-25400
// 
// 
// 
// 
// 
basic.forever(function () {
    servos.P1.setAngle(speedLeft)
    servos.P2.setAngle(speedRight)
    basic.pause(500)
})

input.onButtonPressed(Button.A, function () {
    previous_roll += -1
    basic.showNumber(previous_roll)
})
input.onGesture(Gesture.LogoUp, function () {
    previous_roll = randint(0, 6)
    basic.showNumber(previous_roll)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    yes_or_no = randint(0, 8)
    if (4 <= yes_or_no) {
        basic.showString("yes")
        basic.clearScreen()
    } else {
        basic.showString("no")
        basic.clearScreen()
    }
    previous_roll = 0
})
input.onButtonPressed(Button.B, function () {
    previous_roll += 1
    basic.showNumber(previous_roll)
})
let yes_or_no = 0
let previous_roll = 0
basic.showString("space race")
previous_roll = 0
basic.forever(function () {
	
})

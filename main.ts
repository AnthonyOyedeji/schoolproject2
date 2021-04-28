input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        number_1 += -1
        basic.showNumber(number_1)
    } else if (state == 1) {
        number_2 += -1
        basic.showNumber(number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    state += 1
    if (state == 1) {
        basic.showString("num2",100)
basic.showNumber(number_2)
    } else if (state == 2) {
        basic.showString("Total=" + (number_1 + number_2))
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
        number_1 += 1
        basic.showNumber(number_1)
    } else if (state == 1) {
        number_2 = 1
        basic.showNumber(number_1)
    }
})
input.onGesture(Gesture.Shake, function () {
    action += 1
    if (action == 1) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (action == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
function go () {
    action = 0
    number_2 = 0
    number_1 = 0
    state = 0
    basic.showString("Enter num1",100)
basic.showNumber(number_1)
}
let action = 0
let number_2 = 0
let number_1 = 0
let state = 0
go()

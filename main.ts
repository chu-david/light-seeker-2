let oldReading = 0
let currentReading = 0
Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 20)
basic.pause(100)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 25)
    basic.pause(200)
    currentReading = input.lightLevel()
    oldReading = 0
    while (currentReading >= oldReading) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 20)
        basic.pause(100)
        oldReading = currentReading
        currentReading = input.lightLevel()
    }
    Kitronik_Move_Motor.stop()
    music.playTone(262, music.beat(BeatFraction.Double))
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
    basic.pause(1000)
})

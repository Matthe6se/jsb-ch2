basic.forever(function () {
    serial.writeNumbers([
    serial.readUntil(serial.delimiters(Delimiters.NewLine)),
    1,
    0,
    0,
    0,
    0,
    0
    ])
})

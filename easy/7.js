function missingAngle(angle1, angle2) {
    const angle = angle1 + angle2
    if (angle < 90) return 'obtuse'
    else if (angle > 90) return 'acute'
    else return 'right'
}

test(missingAngle(27, 59), "obtuse")
test(missingAngle(135, 11), "acute")
test(missingAngle(45, 45), "right")
test(missingAngle(45, 15), "obtuse")
test(missingAngle(31, 100), "acute")
test(missingAngle(35, 55), "right")
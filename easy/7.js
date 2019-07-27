function missingAngle(angle1, angle2) {
    let angle3 = 180 - (angle1 + angle2);
    if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        return "obtuse";
    } else if (angle1 == 90 || angle2 == 90 || angle3 == 90) {
        return "right";
    } else {
        return "acute";
    }
}

test(missingAngle(27, 59), "obtuse")
test(missingAngle(135, 11), "obtuse")
test(missingAngle(45, 45), "right")
test(missingAngle(45, 15), "obtuse")
test(missingAngle(31, 100), "obtuse")
test(missingAngle(35, 55), "right")

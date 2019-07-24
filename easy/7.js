function missingAngle(angle1, angle2) {
  let angle3 = 180 - (angle1 + angle2);
  if (angle3 < 90) {
    return "acute";
  } else if (angle3 > 90) {
    return "obtuse";
  } else return "right";
}

test(missingAngle(27, 59), "acute");
test(missingAngle(135, 11), "obtuse");
test(missingAngle(45, 45), "right");
test(missingAngle(45, 15), "acute");
test(missingAngle(31, 100), "obtuse");
test(missingAngle(35, 55), "right");

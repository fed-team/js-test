function missingAngle(angle1, angle2) {
<<<<<<< HEAD
    if(angle1+angle2<90) return "obtuse";
    else if(angle1+angle2==90) return "right";
    else return "acute";
=======
	
>>>>>>> 8c0b4c51e337aae063d1a5e0ad57107227c19f45
}

test(missingAngle(27, 59), "obtuse")
test(missingAngle(135, 11), "acute")
test(missingAngle(45, 45), "right")
test(missingAngle(45, 15), "obtuse")
test(missingAngle(31, 100), "acute")
test(missingAngle(35, 55), "right")
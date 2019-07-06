function triArea(base, height) {
	return (base * height) / 2;
}

test(3, triArea(3, 2))
test(10, triArea(5, 4))
test(50, triArea(10, 10))
test(0, triArea(0, 60))
test(66, triArea(12, 11))
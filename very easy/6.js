function remainder(x, y) {
    return x%y;
	
}

test(1, remainder(7, 2));
test(3, remainder(3, 4));
test(-9, remainder(-9, 45));
test(0, remainder(5, 5));
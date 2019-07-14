function animals(chickens, cows, pigs) {
	return 2 * chickens + 4 * cows + 4 * pigs;
}

test(50, animals(5, 2, 8));
test(50, animals(3, 4, 7));
test(22, animals(1, 2, 3));
test(34, animals(3, 5, 2));
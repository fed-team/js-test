function lessThanOrEqualToZero(num) {
	return num <= 0;
}

test(false, lessThanOrEqualToZero(5));
test(true, lessThanOrEqualToZero(0));
test(true, lessThanOrEqualToZero(-5));
test(false, lessThanOrEqualToZero(1));
test(false, lessThanOrEqualToZero(2));
test(false, lessThanOrEqualToZero(10000));
test(false, lessThanOrEqualToZero(0.5));
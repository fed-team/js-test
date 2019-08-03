function factorial(n) {
	if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

test(factorial(5), 120)
test(factorial(3), 6)
test(factorial(1), 1)
test(factorial(0), 1)
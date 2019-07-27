function factorial(n) {
    return n?n*factorial(n-1):1;
}

test(factorial(5), 120)
test(factorial(3), 6)
test(factorial(1), 1)
test(factorial(0), 1)
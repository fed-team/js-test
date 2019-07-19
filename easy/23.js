function factorial(n) {
    if(n<2) return 1;
    
    return n*factorial(n-1);
}

test(factorial(5), 120)
test(factorial(3), 6)
test(factorial(1), 1)
test(factorial(0), 1)

function calculateExponent(num, exp) {
    return num**exp;
}

test(3125, calculateExponent(5,5))
test(4, calculateExponent(2,2))
test(27, calculateExponent(3,3))
test(10000000000, calculateExponent(10,10))
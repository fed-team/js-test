function calculateExponent(num, exp) {
    let helper = 1;
	for(i=0; i<exp; i++){
        helper *= num;
    }
    return helper;
}

test(3125, calculateExponent(5,5))
test(4, calculateExponent(2,2))
test(27, calculateExponent(3,3))
test(10000000000, calculateExponent(10,10))
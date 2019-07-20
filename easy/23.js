function factorial(n) {
    let sum=1;
	for(let i=1;i<=n;i++){
        sum*=i;
    }
    return sum;
}

test(factorial(5), 120)
test(factorial(3), 6)
test(factorial(1), 1)
test(factorial(0), 1)
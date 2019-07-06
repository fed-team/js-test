function divisible(num) {
 return num % 100 === 0 ? true : false;
}

test(false, divisible(1))
test(true, divisible(100))
test(true, divisible(1000))
test(true, divisible(111000))
test(false, divisible(-1))
test(true, divisible(0))
test(true, divisible(-100))

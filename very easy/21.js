function isEvenOrOdd(num) {

    return (num%2!==0) ?  "odd" :  "even";
	
}

test("odd", isEvenOrOdd(3))
test("even", isEvenOrOdd(0))
test("odd", isEvenOrOdd(7))
test("even", isEvenOrOdd(12))
test("even", isEvenOrOdd(6474))
test("odd", isEvenOrOdd(3))
test("odd", isEvenOrOdd(301))
test("odd", isEvenOrOdd(-3))
test("even", isEvenOrOdd(-0))
test("odd", isEvenOrOdd(-7))
test("even", isEvenOrOdd(-12))
test("even", isEvenOrOdd(-6474))
test("odd", isEvenOrOdd(-3))
test("odd", isEvenOrOdd(-301))
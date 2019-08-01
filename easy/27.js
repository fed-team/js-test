function myPi(n) {
  return parseFloat(Math.PI.toFixed(n));
}

test(myPi(0), 3);
test(myPi(1), 3.1);
test(myPi(2), 3.14);
test(myPi(3), 3.142);
test(myPi(5), 3.14159);
test(myPi(6), 3.141593);
test(myPi(7), 3.1415927);
test(myPi(8), 3.14159265);
test(myPi(9), 3.141592654);
test(myPi(10), 3.1415926536);
test(myPi(11), 3.14159265359);
test(myPi(12), 3.14159265359);
test(myPi(13), 3.1415926535898);
test(myPi(14), 3.14159265358979);
test(myPi(15), 3.141592653589793);

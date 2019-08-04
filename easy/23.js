function factorial(n) {
  if (n == 0) return 1;
  return _.range(1, n + 1).reduce((x, y) => x * y);
}
test(factorial(5), 120);
test(factorial(3), 6);
test(factorial(1), 1);
test(factorial(0), 1);

function factorial(n) {
  let strong = 1;
  for (let i = 1; i <= n; i++) strong = strong * i;
  return strong;
}

test(factorial(5), 120);
test(factorial(3), 6);
test(factorial(1), 1);
test(factorial(0), 1);

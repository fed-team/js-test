function factorial(n) {
  let num = [];
  for (let i = 1; i < n; i++) {
    num.push(i);
  }
  console.log(num);
}

test(factorial(5), 120);
test(factorial(3), 6);
test(factorial(1), 1);
test(factorial(0), 1);

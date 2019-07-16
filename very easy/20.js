function check(arr, el) {
  return arr.includes(el);
}

test(true, check([1, 2, 3, 4, 5], 3));
test(false, check([1, 1, 2, 1, 1], 3));
test(true, check([1, 1, 2, 1, 5, 4, 7], 7));
test(false, check([1, 1, 2, 1, 5, 4, 7], 8));
test(true, check([5, 5, 5, 6], 5));
test(false, check([], 5));

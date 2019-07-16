function find_index(arr, str) {
  return arr.indexOf(str);
}

test(3, find_index(["abc", "ghj", "banana", "grape"], "grape"));
test(5, find_index(["a", "b", "c", "d", "e", "f"], "f"));
test(
  1,
  find_index(["hi", "explosion", "testcase", "validstring"], "explosion")
);

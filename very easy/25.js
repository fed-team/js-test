function ctoa(c) {
  return c.charCodeAt(0);
}

test(32, ctoa(" "));
test(65, ctoa("A"));
test(93, ctoa("]"));
test(94, ctoa("^"));
test(99, ctoa("c"));

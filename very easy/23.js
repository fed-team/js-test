function hasSpaces(str) {
  return str.includes(" ");
}

test(false, hasSpaces("Foo"));
test(true, hasSpaces("Foo bar"));
test(true, hasSpaces("Foo "));
test(true, hasSpaces(" Foo"));
test(true, hasSpaces(" "));
test(false, hasSpaces(""));
test(false, hasSpaces(",./;'[]-="));

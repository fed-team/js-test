function charCount(char, str) {
  return [...str].filter(oneLetter => oneLetter == char).length;
}

test(charCount("a", "edabit"), 1);
test(charCount("b", "big fat bubble"), 4);
test(charCount("c", "Chamber of secrets"), 1);
test(
  charCount("f", "frank and his friends have offered five foxes for sale"),
  7
);
test(charCount("x", "edabit"), 0);
test(charCount("a", "Adam and Eve bit the apple and found a snake"), 6);
test(charCount("s", "sssssssssssssssssssssssss"), 25);
test(charCount("7", "10795426697"), 2);

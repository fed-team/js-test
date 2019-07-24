function isPrefix(word, prefix) {
  return word.slice(0, prefix.length - 1) == prefix.slice(0, -1);
}

function isSuffix(word, suffix) {
  return (
    word.slice(word.length - suffix.length + 1, word.length) ==
    suffix.slice(1, suffix.length)
  );
}

test(isPrefix("automation", "auto-"), true);
test(isPrefix("superfluous", "super-"), true);
test(isPrefix("oration", "mega-"), false);
test(isPrefix("retrospect", "sub-"), false);

test(isSuffix("arachnophobia", "-phobia"), true);
test(isSuffix("rhinoplasty", "-plasty"), true);
test(isSuffix("movement", "-scope"), false);
test(isSuffix("vocation", "-logy"), false);

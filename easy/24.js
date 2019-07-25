function filterArray(arr) {
  let deleteString = _.remove(arr, function(x) {
    return typeof x != "string";
  });
  return deleteString;
}

testSimilar(filterArray([1, 2, "a", "b"]), [1, 2]);
testSimilar(filterArray([1, "a", "b", 0, 15]), [1, 0, 15]);
testSimilar(filterArray([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
testSimilar(filterArray(["jsyt", 4, "yt", 6]), [4, 6]);
testSimilar(filterArray(["r", 5, "y", "e", 8, 9]), [5, 8, 9]);
testSimilar(filterArray(["a", "e", "i", "o", "u"]), []);
testSimilar(filterArray([4, "z", "f", 5]), [4, 5]);
testSimilar(filterArray(["abc", 123]), [123]);
testSimilar(filterArray(["$%^", 567, "&&&"]), [567]);
testSimilar(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]), [
  43,
  76,
  88
]);

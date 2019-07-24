function hashPlusCount(str) {
  let hash = (plus = 0);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "#") hash++;
    else if (str[i] == "+") plus++;
  }
  return `${hash},${plus}`;
}

testSimilar(hashPlusCount("####"), [4, 0]);
testSimilar(hashPlusCount("#"), [1, 0]);
testSimilar(hashPlusCount("+++++++"), [0, 7]);
testSimilar(hashPlusCount("++"), [0, 2]);
testSimilar(hashPlusCount("#+#+"), [2, 2]);
testSimilar(hashPlusCount("###+"), [3, 1]);
testSimilar(hashPlusCount("##+++#"), [3, 3]);
testSimilar(hashPlusCount("#+++#+#++#"), [4, 6]);
testSimilar(hashPlusCount(""), [0, 0]);

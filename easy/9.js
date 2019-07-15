
function hashPlusCount(str) {
	
}

testSimilar(hashPlusCount("####"), [4, 0])
testSimilar(hashPlusCount("#"), [1, 0])
testSimilar(hashPlusCount("+++++++"), [0, 7])
testSimilar(hashPlusCount("++"), [0, 2])
testSimilar(hashPlusCount("#+#+"), [2, 2])
testSimilar(hashPlusCount("###+"), [3, 1])
testSimilar(hashPlusCount("##+++#"), [3, 3])
testSimilar(hashPlusCount("#+++#+#++#"), [4, 6])
testSimilar(hashPlusCount(""), [0, 0])
>>>>>>> 8c0b4c51e337aae063d1a5e0ad57107227c19f45

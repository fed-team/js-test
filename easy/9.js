
function hashPlusCount(str) {
    
    return [str.replace(/[^#]/gm, "").length, str.replace(/[^\+]/gm,"").length];

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
testSimilar(hashPlusCount('#+#++123'), [2, 3])
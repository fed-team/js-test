function hashPlusCount(str) {
    let hashPlusArray=[0,0];
    for(let i=0;i<str.length;i++){
        if(str[i]=="#"){
            hashPlusArray[0]++;
        }
        else if(str[i]=="+"){
            hashPlusArray[1]++;
        }
    }
    return hashPlusArray;
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


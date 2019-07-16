function firstVowel(str) {
    str = str.toLowerCase();
    str = str.split([``[1]]);
    let lookfor = [`a`, `e`, `i`, `o`, `u`, `y`]
    let score = -1;
    // console.log(typeof lookfor);
    str.forEach(element => {
        if (score !== -1) {
            return score;
        } else {
            lookfor.forEach(ele => {
                if (element == ele) {
                    score = str.indexOf(element);
                    console.log(score);
                    //return score;
                }
            });
        }
    });
}

test(firstVowel("hello"), 1)
test(firstVowel("apple"), 0)
test(firstVowel("string"), 3)
test(firstVowel("STRAWBERRY"), 3)
test(firstVowel("MELON"), 1)
test(firstVowel("piNNEaPLE"), 1)
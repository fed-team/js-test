function firstVowel(str) {
    str = str.toLowerCase();
    str = str.split([`` [1]]);
    let lookfor = [`a`, `e`, `i`, `o`, `u`, `y`];
    let score = -1;
    let count = 0;
    str.forEach(element => {
        lookfor.forEach(ele => {
            if (element == ele && count != 1) {
                score = str.indexOf(element);
                count++;
            }
        });
    });
    return score;
}

test(firstVowel("hello"), 1)
test(firstVowel("apple"), 0)
test(firstVowel("string"), 3)
test(firstVowel("STRAWBERRY"), 3)
test(firstVowel("MELON"), 1)
test(firstVowel("piNNEaPLE"), 1)
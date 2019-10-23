function firstVowel(str) {
    return str.search(/[aeiyuo]/i);
}

test(firstVowel("hello"), 1)
test(firstVowel("apple"), 0)
test(firstVowel("string"), 3)
test(firstVowel("STRAWBERRY"), 3)
test(firstVowel("MELON"), 1)
test(firstVowel("piNNEaPLE"), 1)
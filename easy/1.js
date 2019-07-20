function isBetween(first, last, word) {
    let isBetweenArr = [first, last, word];
    isBetweenArr.sort();
    return isBetweenArr[1] == word;
}

test(isBetween("apple", "banana", "azure"), true)
test(isBetween("bookcase", "zebra", "squid"), true)
test(isBetween("shrapnel", "tapenade", "tally"), true)
test(isBetween("monk", "monument", "monkey"), true)
test(isBetween("oath", "ostrich", "osteoporosis"), true)
test(isBetween("ostracize", "ostrich", "open"), false)
test(isBetween("bookend", "boolean", "boost"), false)
test(isBetween("tamer", "tanner", "timid"), false)
test(isBetween("rhino", "sorcerer", "quote"), false)
test(isBetween("body", "lung", "ace"), false)
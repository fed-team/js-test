function firstVowel(str) {
    const vowels="aeiou";
    const result= str.toLowerCase().split("").findIndex(char=>vowels.includes(char));
    return result>-1?result:str.toLowerCase().indexOf("y");
}

test(firstVowel("hello"), 1)
test(firstVowel("apple"), 0)
test(firstVowel("string"), 3)
test(firstVowel("STRAWBERRY"), 3)
test(firstVowel("MELON"), 1)
test(firstVowel("piNNEaPLE"), 1)
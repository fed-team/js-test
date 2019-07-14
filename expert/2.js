const sameVowelGroup = arr => {

}

testSimilar(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]), ["hoops", "bot", "bottom"])
testSimilar(sameVowelGroup(["crop", "nomnom", "bolo", "yodeller"]), ["crop", "nomnom", "bolo"])
testSimilar(sameVowelGroup(["semantic", "aimless", "beautiful", "meatless icecream"]), ["semantic", "aimless", "meatless icecream"])
testSimilar(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]), ["many"])
testSimilar(sameVowelGroup(["toe", "ocelot", "maniac"]), ["toe", "ocelot"])
testSimilar(sameVowelGroup(["a", "apple", "flat", "map", "shark"]), ["a", "flat", "map", "shark"])
testSimilar(sameVowelGroup(["a", "aa", "ab", "abc", "aaac", "abe"]), ["a", "aa", "ab", "abc", "aaac"])
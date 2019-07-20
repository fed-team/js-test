const join = arr => {
    
}

testSimilar(join(["happy", "python", "honey", "yelp", "plank", "lanky"]), ["happythoneyelplanky", 1])
testSimilar(join(["move", "over", "very"]), ["movery", 3])
testSimilar(join(["oven", "envier", "erase", "serious"]), ["ovenvieraserious", 2])
testSimilar(join(["to", "ops", "psy", "syllable"]), ["topsyllable", 1])
testSimilar(join(["aaa", "bbb", "ccc", "ddd"]), ["aaabbbcccddd", 0])
testSimilar(join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]), ["abcdefghijklmnop", 4])
testSimilar(join(["aab", "abcccd", "cdeeef", "effff"]), ["aabcccdeeeffff", 2])
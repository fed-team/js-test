function charIndex(word, char) {
    if (word.indexOf(char) > -1 && word.lastIndexOf(char) > -1) {
        return [word.indexOf(char), word.lastIndexOf(char)];
    } else return undefined;
}

testSimilar(charIndex('hello', 'l'), [2, 3])
testSimilar(charIndex('circumlocution', 'r'), [2, 2])
testSimilar(charIndex('circumlocution', 'i'), [1, 11])
testSimilar(charIndex('circumlocution', 'c'), [0, 8])
testSimilar(charIndex('happy', 'h'), [0, 0])
testSimilar(charIndex('happy', 'p'), [2, 3])
testSimilar(charIndex('happy', 'e'), undefined)
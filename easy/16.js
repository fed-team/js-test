function charIndex(word, char) {
    word = word.split('');
    let helper = [];
    word.forEach((element, i) => {
        if (element == char) {
            helper.push(i);
        }
    });
    return (helper.length > 0) ? [helper[0], helper[helper.length - 1]] : undefined;
}

testSimilar(charIndex('hello', 'l'), [2, 3])
testSimilar(charIndex('circumlocution', 'r'), [2, 2])
testSimilar(charIndex('circumlocution', 'i'), [1, 11])
testSimilar(charIndex('circumlocution', 'c'), [0, 8])
testSimilar(charIndex('happy', 'h'), [0, 0])
testSimilar(charIndex('happy', 'p'), [2, 3])
testSimilar(charIndex('happy', 'e'), undefined)
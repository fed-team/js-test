function charIndex(word, char) {
    let numberOfChars = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == char) numberOfChars++;
    }
    let firstIndex = word.indexOf(char, 0);
    let secondIndex=word.indexOf(char, firstIndex+1);
    if(numberOfChars==3){
        secondIndex=word.indexOf(char, secondIndex+1);
    }
    if (secondIndex == -1) secondIndex = firstIndex;
    let indexArray = [firstIndex, secondIndex];
    if (firstIndex == -1) indexArray = undefined;
    return indexArray;
}

testSimilar(charIndex('hello', 'l'), [2, 3])
testSimilar(charIndex('circumlocution', 'r'), [2, 2])
testSimilar(charIndex('circumlocution', 'i'), [1, 11])
testSimilar(charIndex('circumlocution', 'c'), [0, 8])
testSimilar(charIndex('happy', 'h'), [0, 0])
testSimilar(charIndex('happy', 'p'), [2, 3])
testSimilar(charIndex('happy', 'e'), undefined)
const removeVowels = str => {
    let newText = '';

    for(let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i);
        if (/[a,e,u,o,i,y]/i.test(currentChar) === false) {
            newText += currentChar;
        }
    }

    return newText;
}

test(removeVowels('ben'), 'bn')
test(removeVowels('many'), 'mn')
test(removeVowels('candy'), 'cnd')
test(removeVowels('hello'), 'hll')
test(removeVowels('apple'), 'ppl')
test(removeVowels('fever'), 'fvr')
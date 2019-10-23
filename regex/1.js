const removeVowels = str => {
    return str.replace(/[aeiyuo]/gm, '');
}

test(removeVowels('ben'), 'bn')
test(removeVowels('many'), 'mn')
test(removeVowels('candy'), 'cnd')
test(removeVowels('hello'), 'hll')
test(removeVowels('apple'), 'ppl')
test(removeVowels('fever'), 'fvr')
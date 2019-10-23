const howManyVowels = str => {
    
    const reg = /[aeiyuo]/gm;

    return str.split(reg).length-1;
}

test(howManyVowels("Celebration"), 5)
test(howManyVowels("Palm"), 1)
test(howManyVowels("Prediction"), 4)
test(howManyVowels("Suite"), 3)
test(howManyVowels("Quote"), 3)
test(howManyVowels("Portrait"), 3)
test(howManyVowels("Steam"), 2)
test(howManyVowels("Tape"), 2)
test(howManyVowels("Nightmare"), 3)
test(howManyVowels("Convention"), 4)
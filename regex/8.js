const howManyVowels = str => {
    let counter = 0;

    for(let i = 0; i < str.length; i++) {
        if (/[a,e,u,o,i,y]/i.test(str.charAt(i))) { counter++ }
    }

    return counter;
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
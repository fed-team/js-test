const howManyVowels = str => {
    const vowels =  [`a`,`e`,`i`,`y`,`u`,`o`];
    let count = 0;
    for(i=0;i<str.length;i++){
        for(j=0;j<vowels.length; j++){
            if(str[i]==vowels[j]){
                count++;
            }
        }
    }
    return count;
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
const firstNVowels = (str, n) => {
    let vowels = str.match(/[a,o,u,i,e,y]/gi);
    if (vowels === null) { vowels = []; }

    if (n > vowels.length) { return 'invalid' }
    else {
        let vowelsText = '';
        for (let i = 0; i < n; i++) {
            vowelsText += vowels[i];
        }
        return vowelsText;
    }
}

test(firstNVowels("sharpening skills", 3), "aei")
test(firstNVowels("major league", 5), "aoeau")
test(firstNVowels("crabby patty", 2), "ay")
test(firstNVowels("shrimp", 1), "i")
test(firstNVowels("shrimpy", 2), "iy")
test(firstNVowels("hostess", 5), "invalid")
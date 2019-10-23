const firstNVowels = (str, n) => {
    const score = str.replace(/[^aeiyuo]/gm,'');
    return (n>score.length) ? 'invalid' : score.slice(0,n);
}

test(firstNVowels("sharpening skills", 3), "aei")
test(firstNVowels("major league", 5), "aoeau")
test(firstNVowels("crabby patty", 2), "ay")
test(firstNVowels("shrimp", 1), "i")
test(firstNVowels("shrimpy", 2), "iy")
test(firstNVowels("hostess", 5), "invalid")
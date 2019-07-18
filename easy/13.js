function isPrefix(word, prefix) {
    let howLong = prefix.length-1;
    prefix = prefix.slice(0, howLong);
    word = word.slice(0, howLong);
    return word == prefix;
}

function isSuffix(word, suffix) {
    let howLong = suffix.length;
    suffix = suffix.slice(1, howLong);
    howLong = suffix.length;
    word = word.slice(word.length-suffix.length, word.length);
    return word == suffix;
}

//can it be done more simply?

test(isPrefix('automation', 'auto-'), true)
test(isPrefix('superfluous', 'super-'), true)
test(isPrefix('oration', 'mega-'), false)
test(isPrefix('retrospect', 'sub-'), false)
test(isSuffix('arachnophobia', '-phobia'), true)
test(isSuffix('rhinoplasty', '-plasty'), true)
test(isSuffix('movement', '-scope'), false)
test(isSuffix('vocation', '-logy'), false)
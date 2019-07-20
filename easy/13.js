function isPrefix(word, prefix) {
    return word.includes(prefix.substring(0, prefix.length - 1));
}

function isSuffix(word, suffix) {
    return word.includes(suffix.substring(1, suffix.length));
}

test(isPrefix('automation', 'auto-'), true)
test(isPrefix('superfluous', 'super-'), true)
test(isPrefix('oration', 'mega-'), false)
test(isPrefix('retrospect', 'sub-'), false)

test(isSuffix('arachnophobia', '-phobia'), true)
test(isSuffix('rhinoplasty', '-plasty'), true)
test(isSuffix('movement', '-scope'), false)
test(isSuffix('vocation', '-logy'), false)
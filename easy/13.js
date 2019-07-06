function isPrefix(word, prefix) {
	
}

function isSuffix(word, suffix) {
	
}

test(isPrefix('automation', 'auto-'), true)
test(isPrefix('superfluous', 'super-'), true)
test(isPrefix('oration', 'mega-'), false)
test(isPrefix('retrospect', 'sub-'), false)

test(isSuffix('arachnophobia', '-phobia'), true)
test(isSuffix('rhinoplasty', '-plasty'), true)
test(isSuffix('movement', '-scope'), false)
test(isSuffix('vocation', '-logy'), false)
function isOmnipresent(arr, val) {
    return arr.every(el => el.some(ele => ele === val));
}

test(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
test(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
test(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)
test(isOmnipresent([[5], [5], [5], [6, 5]], 6), false)
test(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1), true)
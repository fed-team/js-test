function isSymmetrical(num) {
    const str = num.toString();
    const rev = str.split('').reverse().join('');
    return str==rev;
}

test(isSymmetrical(23), false)
test(isSymmetrical(9562), false)
test(isSymmetrical(10019), false)
test(isSymmetrical(1), true)
test(isSymmetrical(3223), true)
test(isSymmetrical(95559), true)
test(isSymmetrical(66566), true)
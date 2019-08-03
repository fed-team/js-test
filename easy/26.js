function isSymmetrical(num) {
    num += '';
	if (num.length === 1) {
        return true;
    } else {
        const half = Math.floor(num.length / 2);
        let reversed = '';
        if (num.length % 2 === 0) {
            for (let i = half - 1; i >= 0; i--) {
                reversed += num.slice(half).charAt(i);
            }
        } else {
            for (let i = half - 1; i >= 0; i--) {
                reversed += num.slice(half + 1).charAt(i);
            }
        }
        return num.slice(0, half) === reversed;
    }
}

test(isSymmetrical(23), false)
test(isSymmetrical(9562), false)
test(isSymmetrical(10019), false)
test(isSymmetrical(1), true)
test(isSymmetrical(3223), true)
test(isSymmetrical(95559), true)
test(isSymmetrical(66566), true)
function largestSwap(num) {
    num += ''
    const digits = [num.charAt(0), num.charAt(1)]
    const [first, second] = digits
    const reversedDigits = [second, first]
    return reversedDigits.join('') * 1 < num * 1
}

test(largestSwap(27), false)
test(largestSwap(43), true)
test(largestSwap(14), false)
test(largestSwap(53), true)
test(largestSwap(99), true)
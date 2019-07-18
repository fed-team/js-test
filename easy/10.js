function largestSwap(n) {
    let dozens = n%10;
    let unity = Math.floor(n/10);
    return (dozens*10+unity)<=n;
}

test(largestSwap(27), false)
test(largestSwap(43), true)
test(largestSwap(14), false)
test(largestSwap(53), true)
test(largestSwap(99), true)

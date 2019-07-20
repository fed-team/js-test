function largestSwap(num) {
    num = num.toString();
    let numArray = [num[1], num[0]];
    return numArray < num;
}

test(largestSwap(27), false)
test(largestSwap(43), true)
test(largestSwap(14), false)
test(largestSwap(53), true)
test(largestSwap(99), true)

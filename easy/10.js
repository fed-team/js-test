function largestSwap(n) {
    let org = n;
    n = n.toString();
    n = n.split(``);
    n = n.reverse();
    n = n.toString();
    n = n.replace(`,`, ``);
    n = parseInt(n);
    return (org >= n);

}

test(largestSwap(27), false)
test(largestSwap(43), true)
test(largestSwap(14), false)
test(largestSwap(53), true)
test(largestSwap(99), true)

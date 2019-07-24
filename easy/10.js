function largestSwap(num) {
  return num.toString()[1] + num.toString()[0] <= num;
}

test(largestSwap(27), false);
test(largestSwap(43), true);
test(largestSwap(14), false);
test(largestSwap(53), true);
test(largestSwap(99), true);

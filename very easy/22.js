function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}

test(22, volumeOfBox({ width: 11, length: 1, height: 2 }));
test(15, volumeOfBox({ width: 1, length: 5, height: 3 }));
test(2, volumeOfBox({ width: 2, length: 1, height: 1 }));
test(60, volumeOfBox({ width: 2, length: 6, height: 5 }));
test(30, volumeOfBox({ width: 2, length: 5, height: 3 }));
test(10, volumeOfBox({ width: 2, length: 5, height: 1 }));

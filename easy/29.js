function transformUpvotes(str) {
  str = str.split(" ");
  return str.map(e => {
    if (/[k]/.test(e[e.length - 1])) {
      return parseFloat(e) * 1000;
    }
    return parseFloat(e);
  });
}

test(transformUpvotes("20.3k 3.8k 7.7k 992"), [20300, 3800, 7700, 992]);
test(transformUpvotes("5.5k 8.9k 32"), [5500, 8900, 32]);
test(transformUpvotes("6.8k 13.5k"), [6800, 13500]);

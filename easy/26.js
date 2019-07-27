function isSymmetrical(num) {
  let table = [...num.toString()];
  let firstNumbers = table.slice(0, Math.floor(num.toString().length / 2));
  let lastNumbers = table.slice(
    table.length - firstNumbers.length,
    table.length
  );
  return JSON.stringify(firstNumbers) === JSON.stringify(lastNumbers.reverse());
}

test(isSymmetrical(23), false);
test(isSymmetrical(9562), false);
test(isSymmetrical(10019), false);
test(isSymmetrical(1), true);
test(isSymmetrical(3223), true);
test(isSymmetrical(95559), true);
test(isSymmetrical(66566), true);

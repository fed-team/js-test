const countAll = str => {

}

testSimilarObject(countAll('Hello'), {'LETTERS': 5, 'DIGITS': 0});
testSimilarObject(countAll('137'), {'LETTERS': 0, 'DIGITS': 3});
testSimilarObject(countAll('H3LL0'), {'LETTERS': 3, 'DIGITS': 2});
testSimilarObject(countAll('149990'), {'LETTERS': 0, 'DIGITS': 6});
testSimilarObject(countAll('edabit 2018'), {'LETTERS': 6, 'DIGITS': 4}, 'Spaces are not letters.');
testSimilarObject(countAll('    '), {'LETTERS': 0, 'DIGITS': 0});
const dartsSolver = (sections, darts, target) => {

}

testSimilar(dartsSolver([3, 6, 8, 11, 15, 19, 22], 3, 35), ['8-8-19']);
testSimilar(dartsSolver([2, 4, 7, 10, 13, 18, 24], 3, 29), ['4-7-18']);
testSimilar(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 40), ['11-11-18']);
testSimilar(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 8), []);
testSimilar(dartsSolver([3, 7, 11, 14, 18, 20, 25], 3, 32), ['3-11-18', '7-7-18', '7-11-14']);
testSimilar(dartsSolver([3, 7, 11, 14, 18, 20, 25, 29, 34], 3, 67), ['18-20-29']);
testSimilar(dartsSolver([3, 7, 11, 14, 18, 20, 25], 4, 23), ['3-3-3-14']);
  
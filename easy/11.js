function set(arr) {

    const filterArr = arr.filter((value, index) => {                                                            true/ false
        return arr.indexOf(value) == index;
      });
      return filterArr;
}

testSimilar(set([1, 3, 3, 5, 5]), [1, 3, 5])
testSimilar(set([4, 4, 4, 4]), [4])
testSimilar(set([5, 7, 8, 9, 10, 15]), [5, 7, 8, 9, 10, 15])
testSimilar(set([5, 9, 9]), [5, 9])
testSimilar(set([1, 2, 3, 4, 5, 5, 6, 6, 7]), [1, 2, 3, 4, 5, 6, 7])
testSimilar(set([1, 1, 2, 2, 2]), [1, 2])
testSimilar(set(['A', 'A', 'A', 'A']), ['A'])
testSimilar(set(['A', 'B', 'C', 'D']), ['A', 'B', 'C', 'D'])
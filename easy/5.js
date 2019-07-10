function removeNull(arr) {
    
}

testSimilar(removeNull(['a', null, 'b', null]), ['a', 'b'])
testSimilar(removeNull([null, null, null, null, null]), [])
testSimilar(removeNull([7, 8, null, 9]), [7, 8, 9])
testSimilar(removeNull([7, null, 8, null, 9]), [7, 8, 9])
function getLastItem(arr) {
	return arr[arr.length-1]
}

testSimilar('Duck', getLastItem(['Cat', 'Dog', 'Duck']))
testSimilar(3, getLastItem([1, 2, 3]))
testSimilar(undefined, getLastItem([undefined]))
testSimilar(true, getLastItem([true, false, false, true]))
testSimilar(null, getLastItem([7, 'String', false, undefined, null]))
testSimilar(false, getLastItem([false]))
testSimilar(undefined, getLastItem([undefined, undefined, undefined]))
testSimilar(45, getLastItem([1, 2, 3, 56, 87, 23, 65, 45]))
testSimilar(undefined, getLastItem(['Apple', 'Orange', undefined]))
testSimilar('Apple', getLastItem([true, false, 'Apple']))
testSimilar(null, getLastItem([null, null, null]))
testSimilar(1, getLastItem([1]))
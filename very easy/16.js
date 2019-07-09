function reverse(arr) {
    let x = arr.length;
    for(let i = x; i>=0; i--){
        return arr[i];
    }
}
//reverse([1, 2, 3, 4]);

testSimilar([4, 3, 2, 1], reverse([1, 2, 3, 4]))
testSimilar([7, 6, 5], reverse([5, 6, 7]))
testSimilar([4, 3, 2, 9, 9], reverse([9, 9, 2, 3, 4]))
testSimilar([3, 3], reverse([3, 3]))
testSimilar([-1, -1, -1], reverse([-1, -1, -1]))
testSimilar([], reverse([]))
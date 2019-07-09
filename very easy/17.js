function concat(arr1, arr2) {
    
    let howLong = arr2.length;
    //console.log(howLong);

    for(i=0; i<=howLong-1; i++){
        arr1.splice(arr1.length,0,arr2[i])
    }
    //console.log(arr1);
    return arr1;
}

testSimilar([1, 3, 5, 2, 6, 8], concat([1, 3, 5], [2, 6, 8]))
testSimilar([7, 8, 10, 9, 1, 1, 2], concat([7, 8], [10, 9, 1, 1, 2]))
testSimilar([4, 5, 1, 3, 3, 3, 3, 3], concat([4, 5, 1], [3, 3, 3, 3, 3]))
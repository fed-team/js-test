function isAvgWhole(arr) {
    let average=0;
    for(let i=0; i<arr.length; i++){
        average+=arr[i];
    }
    average/=arr.length;
    return Number.isInteger(average);
}

test(isAvgWhole([3, 5, 9]), false);
test(isAvgWhole([1, 1, 1, 1]), true);
test(isAvgWhole([1, 2, 3, 4, 5]), true);
test(isAvgWhole([5, 2, 4]), false);
test(isAvgWhole([11, 22]), false);
test(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]), false);
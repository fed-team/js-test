function sumOfCubes(nums) {
    let sum=0;
	for(let i=0;i<nums.length;i++){
        sum+=Math.pow(nums[i],3);
    }
    return sum;
}

test(sumOfCubes([1, 5, 9]), 855)
test(sumOfCubes([3, 4, 5]), 216)
test(sumOfCubes([1, 1, 1]), 3)
test(sumOfCubes([2]), 8)
test(sumOfCubes([5, 1, 2]), 134)
test(sumOfCubes([32]), 32768)
test(sumOfCubes([5, 9, 4, 4, 9]), 1711)
test(sumOfCubes([0, 1, 2]), 9)
test(sumOfCubes([]), 0)
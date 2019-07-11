const countOnes = arr => {
    
}

test(countOnes([1, 1, 1, 1, 1]), 1)
test(countOnes([1, 1, 1, 1, 0]), 1)
test(countOnes([0, 0, 0, 0, 0]), 0)
test(countOnes([1, 0, 0, 0, 0]), 0)
test(countOnes([1, 0, 1, 0, 1]), 0)
test(countOnes([1, 0, 0, 0, 1, 0, 0, 1, 1]), 1)
test(countOnes([1, 1, 0, 1, 1, 0, 0, 1, 1]), 3)
test(countOnes([1, 0, 0, 1, 1, 0, 0, 1, 1]), 2)
test(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]), 2)
test(countOnes([1, 0, 1, 0, 1, 0, 1, 0]), 0)
test(countOnes([1, 1, 1, 1, 0, 0, 0, 0]), 1)
test(countOnes([1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]), 3)
function equalSlices(total, people, each) {
    
    return people*each<=total;

}

test(true, equalSlices(8, 3, 2))
test(false, equalSlices(8, 3, 3))
test(true, equalSlices(24, 12, 2))
test(false, equalSlices(5, 6, 1))
test(true, equalSlices(5, 0, 100))
test(true, equalSlices(15, 2, 7))
test(false, equalSlices(15, 2, 8))
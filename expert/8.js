const largestIsland = arr => {

}

test(largestIsland([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
]), 1)

test(largestIsland([
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 1]
]), 5)

test(largestIsland([
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 1]
]), 3)

test(largestIsland([
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 1]
]), 4)

test(largestIsland([
    [1, 0, 0],
    [0, 0, 1],
    [0, 0, 1]
]), 2)

test(largestIsland([
    [1, 0, 0],
    [0, 1, 1],
    [0, 0, 1]
]), 4)

test(largestIsland([
    [1, 0],
    [0, 1],
    [0, 0]
]), 2)

test(largestIsland([
    [1]
]), 1)

test(largestIsland([
    [1],
    [0],
    [1]
]), 1)

test(largestIsland([
    [1, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
]), 6)
function isOmnipresent(arr, val) {
    let check = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
            if (arr[i][x] == val) check++;
        }
    }
    return check >= arr.length;
}

test(isOmnipresent([
    [1, 1],
    [1, 3],
    [5, 1],
    [6, 1]
], 1), true)
test(isOmnipresent([
    [1, 1],
    [1, 3],
    [5, 1],
    [6, 1]
], 6), false)
test(isOmnipresent([
    [5],
    [5],
    [5],
    [6, 5]
], 5), true)
test(isOmnipresent([
    [5],
    [5],
    [5],
    [6, 5]
], 6), false)
test(isOmnipresent([
    [5, 1],
    [5, 1],
    [5, 1],
    [6, 5, 1]
], 1), true)
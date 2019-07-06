const test = (expected, actual) => {
    if(expected !== actual){
        console.error(`Expected: ${expected}, Actual: ${actual}`);
    }
}

const testSimilar = (expected, actual) => {
    const isEqual = _.isEqual(expected, actual);
    if(!isEqual){
        console.error(`Expected: [${expected}], Actual: [${actual}]`);
    }
}
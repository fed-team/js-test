const test = (actual, expected) => {
    if(actual !== expected){
        console.error(`Expected: ${expected}, Actual: ${actual}`);
    }
}

const testSimilar = (actual, expected) => {
    if(!_.isEqual(actual, expected)){
        console.error(`Expected: [${expected}], Actual: [${actual}]`);
    }
}

const testSimilarObject = (actual, expected) => {
    if(!_.isEqual(actual, expected)){
        console.error(`Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
    }
}
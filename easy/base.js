const test = (actual, expected) => {
    if(actual !== expected){
        console.error(`Actual: ${actual}, Expected: ${expected}`);
    }
}

const testSimilar = (actual, expected) => {
    if(!_.isEqual(actual, expected)){
        console.error(`Actual: [${actual}], Expected: [${expected}]`);
    }
}
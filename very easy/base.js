const test = (actual, expected) => {
  if(Array.isArray(expected)){
    compareArrays(actual, expected);
  }else{
     compareValues(actual, expected)
  }
}

const compareArrays = (actual, expected) => {
  if(!_.isEqual(actual, expected)){
    console.error(`Actual: [${actual}], Expected: [${expected}]`);
  }
}

const compareValues = (actual, expected) => {
  if(actual !== expected){
      console.error(`Actual: ${actual}, Expected: ${expected}`);
    }
}

const testSimilar = (expected, actual) => {
    const isEqual = _.isEqual(expected, actual);
    if(!isEqual){
        console.error(`Expected: [${expected}], Actual: [${actual}]`);
    }
}

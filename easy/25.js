function isZipCode(zipcode) {
    let NumberOfCorrectLetters = 0;
    const myRegExp = /[0-9]/;
    for (let i = 0; i < zipcode.length; i++) {
        if (myRegExp.test(zipcode[i])) NumberOfCorrectLetters++;
    }
    return (NumberOfCorrectLetters == 5) && (zipcode[2] == "-");
}

test(isZipCode("81-442"), true);
test(isZipCode("81442"), false);
test(isZipCode("33-789"), true);
test(isZipCode("42-531"), true);
test(isZipCode("9a3-45"), false);
test(isZipCode("%2345"), false);
test(isZipCode("933345"), false);
test(isZipCode("2345"), false);
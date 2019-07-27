function isZipCode(zipcode) {
    let NumberOfCorrectLetters = 0;
    for (let number of zipcode) {
        if (number.match(/[0-9]/)) NumberOfCorrectLetters++;
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
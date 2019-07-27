function isZipCode(zipcode) {
  return /[0-9]{2}\-[0-9]{3}?$/.test(zipcode);
}

test(isZipCode("81-442"), true);
test(isZipCode("81442"), false);
test(isZipCode("33-789"), true);
test(isZipCode("42-531"), true);
test(isZipCode("9a3-45"), false);
test(isZipCode("%2345"), false);
test(isZipCode("933345"), false);
test(isZipCode("2345"), false);

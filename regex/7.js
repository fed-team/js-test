const isZipCodeValid = str => {

}

test(isZipCodeValid("81442"), false); 
test(isZipCodeValid("81-442"), true); 
test(isZipCodeValid("337-89"), false); 
test(isZipCodeValid("4-2-531"), false); 
test(isZipCodeValid("9a345", false));
test(isZipCodeValid("%2345"), false);
test(isZipCodeValid("933345"), false);
test(isZipCodeValid("2345", false));
test(isZipCodeValid(" 93345"), false);
test(isZipCodeValid("23-455"), true);
test(isZipCodeValid("23 455"), false);
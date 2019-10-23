function isZipCode(zipcode){    
    return /[\d]{2}-[\d]{3}/gm.test(zipcode);
} 

test(isZipCode("81-442"), true); 
test(isZipCode("81442"), false); 
test(isZipCode("33-789"), true); 
test(isZipCode("42-531"), true);
test(isZipCode("9a3-45"), false);
test(isZipCode("%2345"), false); 
test(isZipCode("933345"), false);
test(isZipCode("2345"), false);
test(isZipCode("---"), false);
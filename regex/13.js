const validatePIN = str => {

    const reg = /\b([0-9]{4})\b/gm;
    const reg2 = /\b([0-9]{6})\b/gm;

    return (reg.test(str) || reg2.test(str)) ? true : false
}

test(validatePIN("1234"), true);
test(validatePIN("12345"), false);
test(validatePIN("a234"), false);
test(validatePIN(""), false);
test(validatePIN("%234"), false);
test(validatePIN("`234"), false);
test(validatePIN("@234"), false);
test(validatePIN("#234"), false);
test(validatePIN("$234"), false);
test(validatePIN("*234"), false);
test(validatePIN("5678"), true);
test(validatePIN("^234"), false);
test(validatePIN("(234"), false);
test(validatePIN(")234"), false);
test(validatePIN("123456"), true);
test(validatePIN("-234"), false);
test(validatePIN("_234"), false);
test(validatePIN("+234"), false);
test(validatePIN("=234"), false);
test(validatePIN("?234"), false);
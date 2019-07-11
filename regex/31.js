const isValidIP = str => {

}

test(isValidIP("12.255.56.1"), true);
test(isValidIP("1.2.3.4"), true);
test(isValidIP("1.2.3"), false);
test(isValidIP("1.2.3.4.5"), false);
test(isValidIP("123.45.67.89"), true);
test(isValidIP("123.456.78.90"), false);
test(isValidIP("123.045.067.089"), false);
test(isValidIP(""), false);
test(isValidIP("abc.def.ghi.jkl"), false);
test(isValidIP("123.456.789.0"), false);
test(isValidIP("12.34.56"), false);
test(isValidIP("12.34.56 .1"), false);
test(isValidIP("12.34.56.-1"), false);
test(isValidIP("123.045.067.089"), false);
test(isValidIP("192.168.1.1"), true);
test(isValidIP("192.168.1.1  "), false);
test(isValidIP("  192.168.1.1"), false);
test(isValidIP("0.232.47.227"), true);
test(isValidIP("1e0.1e0.1e0.1e0"), false);
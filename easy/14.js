function convertBinary(str) {
  str = str.replace(/[a-m]/gi, "0");
  str = str.replace(/[n-z]/gi, "1");
  return str;
}

test(convertBinary("house"), "01110");
test(convertBinary("excLAIM"), "0100000");
test(convertBinary("moon"), "0111");
test(convertBinary("MOOn"), "0111");
test(convertBinary("topsyTurvy"), "1111111111");

function convertBinary(str) {
  let binaryNum = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase().charCodeAt(0) <= 109) {
      binaryNum += 0;
    } else binaryNum += 1;
  }
  return binaryNum;
}

test(convertBinary("house"), "01110");
test(convertBinary("excLAIM"), "0100000");
test(convertBinary("moon"), "0111");
test(convertBinary("MOOn"), "0111");
test(convertBinary("topsyTurvy"), "1111111111");

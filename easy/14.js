function convertBinary(str) {
  let binaryNum = "";

  [...str].forEach(char => {
    if (/[^a-mA-M]+$/.test(char)) binaryNum += "1";
    else if (/[^n-zN-Z]+$/.test(char)) binaryNum += "0";
  });
  return binaryNum;
}

test(convertBinary("house"), "01110");
test(convertBinary("excLAIM"), "0100000");
test(convertBinary("moon"), "0111");
test(convertBinary("MOOn"), "0111");
test(convertBinary("topsyTurvy"), "1111111111");

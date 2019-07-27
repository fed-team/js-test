function convertBinary(str) {
    return str.toLowerCase().split("").map(char=>/[a-m]/.test(char)?'0':'1').join("");
}

test(convertBinary("house"), "01110")
test(convertBinary("excLAIM"), "0100000")
test(convertBinary("moon"), "0111")
test(convertBinary("MOOn"), "0111")
test(convertBinary("topsyTurvy"), "1111111111")
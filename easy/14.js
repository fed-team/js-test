function convertBinary(str) {
    let binaryCode = ''
        for(let i = 0; i < str.length; i++) {
            (/[a-m]/i).test(str.charAt(i)) ? binaryCode += '0' : binaryCode += '1'
        }
    return binaryCode
}

test(convertBinary("house"), "01110")
test(convertBinary("excLAIM"), "0100000")
test(convertBinary("moon"), "0111")
test(convertBinary("MOOn"), "0111")
test(convertBinary("topsyTurvy"), "1111111111")
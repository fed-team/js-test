const splitCode = str => {
    return [str.replace(/\d/gmi,''), parseInt(str.replace(/\D/gmi,''))]
}

testSimilar(splitCode("TEWA8392"), ["TEWA", 8392])
testSimilar(splitCode("MMU778"), ["MMU", 778])
testSimilar(splitCode("SRPE5532"), ["SRPE", 5532])
testSimilar(splitCode("SKU8977"), ["SKU", 8977])
testSimilar(splitCode("MCI5589"), ["MCI", 5589])
testSimilar(splitCode("WIEB3921"), ["WIEB", 3921])
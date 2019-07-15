const isValidHexCode = str => {
    
}

test(isValidHexCode('#CD5C5C'), true)
test(isValidHexCode('#EAECEE'), true)
test(isValidHexCode('#eaecee'), true)
test(isValidHexCode('#CD5C58C'), false)
test(isValidHexCode('#CD5C5Z'), false)
test(isValidHexCode('#CD5C&C'), false)
test(isValidHexCode('CD5C5C'), false)
test(isValidHexCode('#123CCCD'), false)
test(isValidHexCode('#123456'), true)
test(isValidHexCode('#987654'), true)
test(isValidHexCode('#9876543'), false)
test(isValidHexCode('#CCCCCC'), true)
test(isValidHexCode('#ZCCZCC'), false)
test(isValidHexCode('#Z88Z99'), false)
test(isValidHexCode('#Z88!99'), false)
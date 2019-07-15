const validatePassword = str => {

}

test(validatePassword('P1zz@'), false)
test(validatePassword('P1zz@P1zz@P1zz@P1zz@P1zz@'), false)
test(validatePassword('mypassword11'), false)
test(validatePassword('MYPASSWORD11'), false)
test(validatePassword('iLoveYou'), false)
test(validatePassword('Pè7$areLove'), false)
test(validatePassword("Repeeea7!"), false)
test(validatePassword('H4(k+x0'), true)
test(validatePassword('Fhg93@'), true)
test(validatePassword('aA0!@#$%^&*()+=_-{}[]:;”'), true)
test(validatePassword('zZ9’?<>,.'), true)
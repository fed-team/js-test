const validName = str => {

}

test(validName("H. Wells"), true)
test(validName("H. G. Wells"), true)
test(validName("Herbert G. Wells"), true)
test(validName("Herbert George Wells"), true)
test(validName("Herbert"), false)
test(validName("Herbert W. G. Wells"), false)
test(validName("h. Wells"), false)
test(validName("herbert G. Wells"), false)
test(validName("H Wells"), false)
test(validName("Herb. Wells"), false)
test(validName("H. George Wells"), false)
test(validName("Herbert George W."), false)
function isEmpty(s) {
	
}

test(false, isEmpty(""))
test(false, isEmpty(" "))
test(false, isEmpty("            "))
test(false, isEmpty("38215"))
test(false, isEmpty("afjabsdf"))
test(false, isEmpty("!?@&"))
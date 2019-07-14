function isEmpty(s) {
	return s=="";
}

test(true, isEmpty(""))
test(false, isEmpty(" "))
test(false, isEmpty("            "))
test(false, isEmpty("38215"))
test(false, isEmpty("afjabsdf"))
test(false, isEmpty("!?@&"))

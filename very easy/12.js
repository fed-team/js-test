function isEmpty(s) {
	return s.length === 0 ? true : false;
}

test(true, isEmpty(""))
test(false, isEmpty(" "))
test(false, isEmpty("            "))
test(false, isEmpty("38215"))
test(false, isEmpty("afjabsdf"))
test(false, isEmpty("!?@&"))

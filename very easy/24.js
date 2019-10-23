function isPlural(word) {
	return word.charAt(word.length-1)=="s";
}

test(true, isPlural("dudes"))
test(true, isPlural("flowers"))
test(true, isPlural("checks"))
test(true, isPlural("varies"))
test(true, isPlural("efforts"))
test(false, isPlural("mood"))
test(false, isPlural("whiteboard"))
test(false, isPlural("cow"))
test(false, isPlural("word"))
test(false, isPlural("love"))
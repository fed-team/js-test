function comp(str1, str2) {
	return str1.length === str2.length ? true : false;
}

test(true, comp("AB", "CD"))
test(false, comp("ABC", "DE"))
test(false, comp("hello", "edabit"))
test(true, comp("meow", "woof"))
test(false, comp("jrnvjrnnt", "cvjknfjvmfvnfjn"))
test(false, comp("jkvnjrt", "krnf"))
test(true, comp("Facebook", "Snapchat"))
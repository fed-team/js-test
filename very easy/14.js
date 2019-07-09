function comp(str1, str2) {
	if(str1.length == str2.length){
        return true;
    }else{
        return false;   
    }
}

test(true, comp("AB", "CD"))
test(false, comp("ABC", "DE"))
test(false, comp("hello", "edabit"))
test(true, comp("meow", "woof"))
test(false, comp("jrnvjrnnt", "cvjknfjvmfvnfjn"))
test(false, comp("jkvnjrt", "krnf"))
test(true, comp("Facebook", "Snapchat"))
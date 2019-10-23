function hasSpaces(str) {
	for(i=0;i<=str.length-1; i++){
        if(str[i]==" "){
            return true;
        }
    }
    return false;
}

test(false, hasSpaces("Foo"))
test(true, hasSpaces("Foo bar"))
test(true, hasSpaces("Foo "))
test(true, hasSpaces(" Foo"))
test(true, hasSpaces(" "))
test(false, hasSpaces(""))
test(false, hasSpaces(",./;'[]-="))
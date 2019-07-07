function addition(num) {
	if(typeof num == "number"){
        return (num+1);
    }else{
        return "to nie jest liczba";
    }
}

test(3, addition(2))
test(-8, addition(-9))
test(1, addition(0))
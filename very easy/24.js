function isPlural(word) {

    howLong = word.length-1;
    
    if(word.charAt(howLong)=="s") { 
        return true;
    }else{
        return false;
    }
	
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
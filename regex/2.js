const containsDigit = str => {
    const arr = str.split(``);

    for(i=0;i<arr.length; i++){
        if(!isNaN(arr[i])) return true;        
    }
    return false;
}

test(containsDigit("c8"), true); 
test(containsDigit("23cc4"), true); 
test(containsDigit("abwekz"),false); 
test(containsDigit("sdfkxi"), false);
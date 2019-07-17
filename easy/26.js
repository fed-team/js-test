function isSymmetrical(num) {
    let str = num.toString();
    let count = 0;

    let howLong = Math.ceil(str.length/2);
    
    for(i=0;i<howLong;i++){
        if(str[i]==str[str.length-1-i]){
            count++;
        }   
    }
    return (count == Math.ceil(howLong));
}

test(isSymmetrical(23), false)
test(isSymmetrical(9562), false)
test(isSymmetrical(10019), false)
test(isSymmetrical(1), true)
test(isSymmetrical(3223), true)
test(isSymmetrical(95559), true)
test(isSymmetrical(66566), true)
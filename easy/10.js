function divisibleByFive(n) {
    let org = n;
    n = n.toString();
    
    if(n.length==2){
        n = n.split(``);
        n = n.reverse();
        n = n.toString();
        n = parseInt(n);

        return (org>n); 
    }else if(n.length==3 && n[0]==`-`){
        n = n.split(``);


        console.log(n);
    }
}

test(false, divisibleByFive(7))
test(true, divisibleByFive(5))
test(true, divisibleByFive(15))
test(false, divisibleByFive(33))
test(false, divisibleByFive(-18))
test(false, divisibleByFive(999))
test(false, divisibleByFive(2))
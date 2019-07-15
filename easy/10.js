<<<<<<< HEAD
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
    return false
}

test(largestSwap(27), false)
test(largestSwap(43), true)
test(largestSwap(14), false)
test(largestSwap(53), true)
test(largestSwap(99), true)

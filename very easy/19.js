function sum(n) {
    let x = 0;
    let y = n;
    for(i=n; i>=0; i--){
        x = x + y;
        y--;
    }
    return x;
}
 
test(1, sum(1))
test(15, sum(5))
test(28, sum(7))
test(55, sum(10))
test(78, sum(12))
test(120, sum(15))
test(210, sum(20))
test(5050, sum(100))
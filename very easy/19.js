function sum(n) {
return _.range(1, n+1).reduce((x,y) => x+y);
}

test(1, sum(1));
test(15, sum(5));
test(28, sum(7));
test(55, sum(10));
test(78, sum(12));
test(120, sum(15));
test(210, sum(20));
test(5050, sum(100));

function matchHouses(step) {
   return (step===0) ? 0 : step*5+1;
}

test(matchHouses(1), 6)
test(matchHouses(0), 0)
test(matchHouses(17), 86)
test(matchHouses(36), 181)
test(matchHouses(15), 76)
test(matchHouses(99), 496)
test(matchHouses(3), 16)
test(matchHouses(87), 436)
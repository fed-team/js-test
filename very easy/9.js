function profitableGamble(prob, prize, pay) {
    return prob * prize > pay ? true : false
}

test(true, profitableGamble(0.2, 50, 9));
test(false, profitableGamble(0.9, 1, 2));
test(true, profitableGamble(0.9, 3, 2));
test(true, profitableGamble(0.33, 10, 3.30));
test(false, profitableGamble(0, 1000, 0.01));
test(true, profitableGamble(0.1, 1000, 7));
test(false, profitableGamble(0, 0, 0));
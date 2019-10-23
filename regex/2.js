const containsDigit = str => {

    return /\d/gm.test(str);
}

test(containsDigit("c8"), true);
test(containsDigit("23cc4"), true);
test(containsDigit("abwekz"), false);
test(containsDigit("sdfkxi"), false);
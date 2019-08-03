const containsDigit = str => {
    return /[0-9]/.test(str);
}

test(containsDigit("c8"), true);
test(containsDigit("23cc4"), true);
test(containsDigit("abwekz"),false);
test(containsDigit("sdfkxi"), false);
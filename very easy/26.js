function match(s1, s2) {
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();
    return (s1==s2) ? true : false;
}

test(true, match("hello", "hELLo"))
test(true, match("hey", "hey"))
test(true, match("venom", "VENOM"))
test(true, match("maGIciAN", "magician"))
test(true, match("stupIFy", "stupifY"))
test(false, match("bald", "blad"))
test(false, match("motive", "emotive"))
test(false, match("mask", "mAskinG"))
test(false, match("skim", "skimp"))
test(false, match("EXCEl", "exceLs"))
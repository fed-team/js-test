const doubleLetters = str => {

    for (i = 0; i < str.length; i++) {
        if (i >= 1) {
            if (str[i - 1] == str[i]) {
                return true;
            }
            else if (i == str.length - 1) {
                return false;
            }
        }
    }
    // i dont know how to do it with regex

}

test(doubleLetters("loop"), true)
test(doubleLetters("meeting"), true)
test(doubleLetters("yummy"), true)
test(doubleLetters("moo"), true)
test(doubleLetters("toodles"), true)
test(doubleLetters("droop"), true)
test(doubleLetters("loot"), true)
test(doubleLetters("orange"), false)
test(doubleLetters("munchkin"), false)
test(doubleLetters("forestry"), false)
test(doubleLetters("raindrops"), false)
test(doubleLetters("gold"), false)
test(doubleLetters("paradise"), false)
test(doubleLetters("chicken"), false)
const doubleLetters = str => {

    const reg = /([a-z])\1/gm;

    return reg.test(str);

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
const countAdverbs = str => {
    const arr = str.match(/ly(\s|\.)/g);
    return arr === null ? 0 : arr.length;
}

test(countAdverbs("She ran hurriedly towards the stadium."), 1)
test(countAdverbs("She ate the lasagna heartily and noisily."), 2)
test(countAdverbs("He hates potatoes."), 0)
test(countAdverbs("He was happily, crazily, foolishly over the moon."), 3)
test(countAdverbs("She writes poetry beautifully."), 1)
test(countAdverbs("There are many fat geese in the park."), 0)
test(countAdverbs("The horse acted aggressively and stubbornly."), 2)
test(countAdverbs("She forgot where to buy the lysol."), 0, '-ly should not be counted if it is not at the end.')
test(countAdverbs("Ilya ran to the store."), 0, '-ly should not be counted if it is not at the end.')
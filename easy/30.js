function vreplace(str, vowel) {
    return str.replace(/[aeiou]/g, vowel);
}

test(vreplace("apples and bananas", "u"), "upplus und bununus")
test(vreplace("cheese casserole", "o"), "chooso cossorolo")
test(vreplace("stuffed jalapeno poppers", "e"), "steffed jelepene peppers")
test(vreplace("shrimp tempura", "a"), "shramp tampara")
test(vreplace("tuna sashimi", "i"), "tini sishimi")
test(vreplace("chocolate cake", "a"), "chacalata caka")
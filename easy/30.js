function vreplace(text, vowel) {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        const currentChar = text.charAt(i)
        if (/[a,o,u,e,i,y]/i.test(currentChar)) {
            newText += vowel;
        } else {
            newText += currentChar;
        }
    }

    return newText;
}

test(vreplace("apples and bananas", "u"), "upplus und bununus")
test(vreplace("cheese casserole", "o"), "chooso cossorolo")
test(vreplace("stuffed jalapeno poppers", "e"), "steffed jelepene peppers")
test(vreplace("shrimp tempura", "a"), "shramp tampara")
test(vreplace("tuna sashimi", "i"), "tini sishimi")
test(vreplace("chocolate cake", "a"), "chacalata caka")
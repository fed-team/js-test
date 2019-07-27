function vreplace(vowel, char) {
  let reg = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= reg.length; i++) {
    for (let j = 0; j <= vowel.length; j++) {
      vowel = vowel.replace(reg[i], char);
    }
  }
  return vowel;
}

test(vreplace("apples and bananas", "u"), "upplus und bununus");
test(vreplace("cheese casserole", "o"), "chooso cossorolo");
test(vreplace("stuffed jalapeno poppers", "e"), "steffed jelepene peppers");
test(vreplace("shrimp tempura", "a"), "shramp tampara");
test(vreplace("tuna sashimi", "i"), "tini sishimi");
test(vreplace("chocolate cake", "a"), "chacalata caka");

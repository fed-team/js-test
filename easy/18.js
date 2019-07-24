function reverseCase(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) <= 90) reverse += str[i].toLowerCase();
    else if (str[i].charCodeAt(0) > 90) reverse += str[i].toUpperCase();
  }
  return reverse;
}

test(reverseCase("Happy Birthday"), "hAPPY bIRTHDAY");
test(reverseCase("MANY THANKS"), "many thanks");
test(reverseCase("sPoNtAnEoUs"), "SpOnTaNeOuS");
test(reverseCase("eXCELLENT, yOuR mAJESTY"), "Excellent, YoUr Majesty");

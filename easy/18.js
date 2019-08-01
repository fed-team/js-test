function reverseCase(str) {
  str = [...str].map(x => {
    if (/[a-z]/.test(x)) {
      return x.toUpperCase();
    } else if (/[A-Z]/.test(x)) {
      return x.toLowerCase();
    } else return x;
  });
  return str.join("");
}

test(reverseCase("Happy Birthday"), "hAPPY bIRTHDAY");
test(reverseCase("MANY THANKS"), "many thanks");
test(reverseCase("sPoNtAnEoUs"), "SpOnTaNeOuS");
test(reverseCase("eXCELLENT, yOuR mAJESTY"), "Excellent, YoUr Majesty");

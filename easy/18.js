function reverseCase(str) {
  return [...str]
    .map(x => {
      if (/[a-z]/.test(x)) {
        return x.toUpperCase();
      }
      return x.toLowerCase();
    })
    .join("");
}

test(reverseCase("Happy Birthday"), "hAPPY bIRTHDAY");
test(reverseCase("MANY THANKS"), "many thanks");
test(reverseCase("sPoNtAnEoUs"), "SpOnTaNeOuS");
test(reverseCase("eXCELLENT, yOuR mAJESTY"), "Excellent, YoUr Majesty");

function reverseCase(str) {
    return str.split("").map(char => char !== char.toUpperCase() ? char.toUpperCase() : char.toLowerCase()).join("");
}

test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')
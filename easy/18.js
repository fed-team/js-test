function reverseCase(str) {
    let newText = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i);

        if (currentChar === currentChar.toLowerCase()) {
            newText += currentChar.toUpperCase();
        } else {
            newText += currentChar.toLowerCase();
        }
    }

    return newText;
}

test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')
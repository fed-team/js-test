function reverseCase(str) {
    let newStr = ``
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newStr += str.charAt(i).toLowerCase();
        }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            newStr += str.charAt(i).toUpperCase();
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty');
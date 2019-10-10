function reverseCase(str) {
    let newStr = ``;
    str.split('').map(el => {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            newStr += el.charAt(0).toLowerCase();
        }
        else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            newStr += el.charAt(0).toUpperCase();
        }
        else {
            newStr += el;
        }
    });
    return newStr;
}
test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty');
function reverseCase(str) {
    return str.split("").map(char => char !== char.toUpperCase() ? char.toUpperCase() : char.toLowerCase()).join("");
    /*
    let convertedStr=[];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            convertedStr[i]=str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
            convertedStr[i]=str[i].toUpperCase();
        }
    }
    return convertedStr.join("");
    */
}

test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')
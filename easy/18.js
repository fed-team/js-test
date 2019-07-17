function reverseCase(str) {
    
    for(i=0;i<str.length;i++){
        if(65<=str.charCodeAt(i)<=90) {

            str[i].toLowerCase();
            console.log(str[i].toLowerCase());
            console.log(str.charCodeAt(i));
        }
        else if(97<=str.charCodeAt(i)<=122) {
            str[i].toUpperCase();
            console.log(str[i].toUpperCase);
        }
        else {console.log(`blad`);}

    }

console.log(str);
}

test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty')
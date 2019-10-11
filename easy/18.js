function reverseCase(str) {
    return str.split('').reduce((acc, el) => {
        if(el === /^[a-zA-Z]/gm){
            return acc += el;
        }else if(el !== el.toLowerCase()){
            return acc += el.toLowerCase();
        }else if(el !== el.toUpperCase()){
            return acc += el.toUpperCase();
        }else{
            return acc+=el;
        }
    },'');
}
test(reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY')
test(reverseCase('MANY THANKS'), 'many thanks')
test(reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS')
test(reverseCase('eXCELLENT, yOuR mAJESTY'), 'Excellent, YoUr Majesty');
test(reverseCase('Hаppy Birthdаy'), 'hАPPY bIRTHDАY')

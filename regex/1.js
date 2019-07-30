const removeVowels = str => {
    const vowels =  [`a`,`e`,`i`,`y`,`u`,`o`];
    for(i=0;i<str.length;i++){
        for(j=0;j<vowels.length; j++){
            if(str[i]==vowels[j]){
                str = str.slice(0,i)+str.slice(i+1, str.length);
            }
        }
    }  
    return str;
}

test(removeVowels('ben'), 'bn')
test(removeVowels('many'), 'mn')
test(removeVowels('candy'), 'cnd')
test(removeVowels('hello'), 'hll')
test(removeVowels('apple'), 'ppl')
test(removeVowels('fever'), 'fvr')
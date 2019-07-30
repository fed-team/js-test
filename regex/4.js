const replaceVowels = (str, sign) => {
    let lookfor = [`a`, `e`, `i`, `o`, `u`, `y`];
    str= str.split('');
    for(i=0; i<str.length; i++){
        for(j=0; j<lookfor.length; j++){
            if(str[i]==lookfor[j]){
                str[i]=sign;
            }
        }
    }
    return str.join(``);
    //this is the same as 30th qest from ../easy/
}

test(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
test(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
test(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
test(replaceVowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")
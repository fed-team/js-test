const replaceVowels = (str, sign) => {
    
    return str.replace(/[aeiyuo]/gm, sign);

}

test(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
test(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
test(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
test(replaceVowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")
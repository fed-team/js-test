const replaceVowels = (str, sign) => {
    let newText = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i)
        if (/[a,o,u,e,i,y]/i.test(currentChar)) {
            newText += sign;
        } else {
            newText += currentChar;
        }
    }

    return newText;
}

test(replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
test(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
test(replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
test(replaceVowels("all is fair in love and war", "<"), "<ll <s f<<r <n l<v< <nd w<r")
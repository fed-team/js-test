function firstVowel(str) {
    const vowels="aeiou";
    for(let char of str){
        if(vowels.includes(char.toLowerCase())) return str.indexOf(char);
        else if(str.includes("y"))return str.indexOf("y");
    }

    /*
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())) return i;
    }
    */
}

test(firstVowel("hello"), 1)
test(firstVowel("apple"), 0)
test(firstVowel("string"), 3)
test(firstVowel("STRAWBERRY"), 3)
test(firstVowel("MELON"), 1)
test(firstVowel("piNNEaPLE"), 1)
test(firstVowel("yeti"), 0)
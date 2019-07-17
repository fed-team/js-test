function vreplace(vowel, char) {
    let lookfor = [`a`, `e`, `i`, `o`, `u`, `y`];


    //vowel= vowel.split([``[1]]);
    //console.log(vowel);

    for(i=0; i<vowel.length; i++){
        for(j=0; j<lookfor.length; j++){
            if(vowel[i]==lookfor[j]){
                vowel[i]=char;
            }
        }
    }
    //vowel = vowel.toString();
    console.log(vowel);
    return vowel;
}

test(vreplace("apples and bananas", "u"), "upplus und bununus")
test(vreplace("cheese casserole", "o"), "chooso cossorolo")
test(vreplace("stuffed jalapeno poppers", "e"), "steffed jelepene peppers")
test(vreplace("shrimp tempura", "a"), "shramp tampara")
test(vreplace("tuna sashimi", "i"), "tini sishimi")
test(vreplace("chocolate cake", "a"), "chacalata caka")
test(vreplace("Hanka modrooka, szla po wode do potoka. Hanka modrooka, szla po wode tam. A w potoku, wode toczy, wyplakuje, modre oczy, Hanka modrooka szla po wo de tam.","ę"), "")
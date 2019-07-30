const lettersOnly = str => {
    let score = ``;
    for(i=0;i<str.length;i++){
        // console.log(str.charCodeAt(i));
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 || str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
            score += str[i];
        }
    }
    return score;
}

test(lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?='), 'Aladdin')
test(lettersOnly('^U)6$22>8p).'), 'Up')
test(lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8'), 'Inception')
test(lettersOnly('!)"P[s9)"69}yc3+?1]+33>3ho'), 'Psycho')
test(lettersOnly(':~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7'), 'Goodfellas')
test(lettersOnly('&&S~]@8>1-0!h#r),80<_>!}|e>_k:'), 'Shrek')
test(lettersOnly(')^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r'), 'Gladiator')
test(lettersOnly(']8;]V9e{=0r!.5t>i<^_g"4o"5~'), 'Vertigo')
test(lettersOnly('%%)?"?B#>/_4a#,;t8|m8675a(n'), 'Batman')
test(lettersOnly('97H^)~a8567ll*o?"6%)w63e37e<n?@='), 'Halloween')
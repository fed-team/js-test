const countSmileys = arr => {
    const reg = /(:|;)(-|~){0,1}(D|\]|\)|\})/gm;
    return arr.reduce(((acc,el)=>(reg.test(el)) ? acc+1 : acc),0)
}

test(countSmileys([":)", ";(", ";}", ":-D"]), 2);
test(countSmileys([";D", ":-(", ":-)", ";~)"]), 3);
test(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
test(countSmileys([";(", ":>", ":}", ":]"]), 0);
test(countSmileys([":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)",]), 13);
test(countSmileys([':)',':(',':D',':O',':;']), 2);
test(countSmileys([':-)',';~D',':-D',':_D']), 3);
test(countSmileys([':---)','))',';~~D',';D']), 1);
test(countSmileys([';~)',':)',':-)',':--)']), 3);
test(countSmileys([':o)',':--D',';-~)']), 0);
test(countSmileys([]), 0);

// tak:
// ;~)
// :)
// :-)
// ;~D
// ;]
// ;D
// :-D

// nie:
// ;-~)
// :--D
// :o)
// :--)
// :---)
// ))
// ;~~D
// :_D
// :;
// :O
// :(
// ;(
// :>
// :}
// :]
// :[
// ;*
// :$
// ;-D
// :-(
const countSmileys = arr => {

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
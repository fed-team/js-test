const retrieve = str => {
    const words = str.slice(0, str.length - 1).split(/\s/g);
    const vowelWords = [];
    words.forEach(el => {
        if (/^[a,o,u,i,e,y].*/i.test(el)) { vowelWords.push(el.toLowerCase()) }
    });
    return vowelWords;
}

testSimilar(retrieve("A simple life is a happy life for me."), ["a", "is", "a"])
testSimilar(retrieve("Exercising is a healthy way to burn off energy."), ["exercising", "is", "a", "off", "energy"])
testSimilar(retrieve("The poor ostrich was ostracized."), ["ostrich", "ostracized"])
testSimilar(retrieve(""), [])
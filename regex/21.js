const retrieve = str => {
    const reg = /[aeiyuo]/gm;
    let arr = str.toLowerCase().replace('.', '').split(' ').reduce((acc, el) => {
        if (reg.test(el[0])) {
            acc.push(el);
            return acc;
        }
        else {
            return acc;
        }
    }, []);
    return arr;
}

testSimilar(retrieve("A simple life is a happy life for me."), ["a", "is", "a"])
testSimilar(retrieve("Exercising is a healthy way to burn off energy."), ["exercising", "is", "a", "off", "energy"])
testSimilar(retrieve("The poor ostrich was ostracized."), ["ostrich", "ostracized"])
testSimilar(retrieve(""), [])
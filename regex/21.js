const retrieve = str => {

}

testSimilar(retrieve("A simple life is a happy life for me."), ["a", "is", "a"])
testSimilar(retrieve("Exercising is a healthy way to burn off energy."), ["exercising", "is", "a", "off", "energy"])
testSimilar(retrieve("The poor ostrich was ostracized."), ["ostrich", "ostracized"])
testSimilar(retrieve(""), [])
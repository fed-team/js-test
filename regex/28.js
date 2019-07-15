const splitGroups = str => {

}

testSimilar(splitGroups('aaabbbaabbab'), ['aaa', 'bbb', 'aa', 'bb', 'a', 'b'])
testSimilar(splitGroups('5556667788'), ['555', '666', '77', '88'])
testSimilar(splitGroups('abbbcc88999&&!!!_'), ['a', 'bbb', 'cc', '88', '999', '&&', '!!!', '_'], 'It should work with special chars.')
testSimilar(splitGroups('555'), ['555'])
testSimilar(splitGroups('AABBCC'), ['AA', 'BB', 'CC'])
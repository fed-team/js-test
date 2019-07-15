const classifyRug = str => {

}

test(classifyRug([
    ['a', 'a', 'b'],
    ['a', 'a', 'b']
]), "horizontally symmetric");

test(classifyRug([
    ['a']
]), "perfect");

test(classifyRug([
    ['a'],
    ['b'], 
    ['a']
]), "perfect");

test(classifyRug([
    ['a'],
    ['b'], 
    ['c']
]), "vertically symmetric");

test(classifyRug([
    ['a', 'b', 'a']
]), "perfect");

test(classifyRug([
    ['a', 'a']
]), "perfect");

test(classifyRug([
    ['d', 'a'],
    ['b', 'b'],
    ['d', 'a']
]), "horizontally symmetric");

test(classifyRug([
    ['d', 'a', 'a', 'a'],
    ['b', 'b', 'a', 'a'],
    ['d', 'a', 'a', 'a']
]), "horizontally symmetric");

test(classifyRug([
    ['a', 'a', 'a', 'a'],
    ['d', 'a', 'a', 'a']
]), "imperfect");
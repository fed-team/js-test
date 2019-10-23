function numArgs() {
    
    return arguments.length;
}

test(0, numArgs())
test(1, numArgs('foo'))
test(2, numArgs('foo', 'bar'))
test(2, numArgs(null, null))
test(4, numArgs('foo', 'bar', 5, null))
test(1, numArgs(false))
test(2, numArgs('foo', {}))
test(3, numArgs('foo', 'bar', {}))
test(3, numArgs([], [], {}))
test(5, numArgs('foo', 'bar', true, null, 0))
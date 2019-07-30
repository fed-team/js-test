const isEven = str => {
    return str % 2 == 0;
    //can i should use parseInt method?
}

test(isEven("2341"), false)
test(isEven("132"), true)
test(isEven("29"), false)
test(isEven("5578"), true)
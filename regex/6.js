const isEven = str => {
    const reg = /2$|4$|6$|8$|0$/gm;
    return reg.test(str);
}

test(isEven("2341"), false);
test(isEven("132"), true);
test(isEven("29"), false);
test(isEven("5578"), true);
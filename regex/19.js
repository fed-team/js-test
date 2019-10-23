const letterCheck = arr => {

    const reg = new RegExp(`[${arr[1]}{${arr[1].length},}]`, 'gmi');
    return reg.test(arr[0]);
}

test(letterCheck(["trances", "nectar"]), true)
test(letterCheck(["THE EYES", "they see"]), true)
test(letterCheck(["assert", "staring"]), false)
test(letterCheck(["arches", "later"]), false)
test(letterCheck(["dale", "caller"]), false)
test(letterCheck(["parses", "parsecs"]), false)
test(letterCheck(["replays", "adam"]), false)
test(letterCheck(["mastering", "streaming"]), true)
test(letterCheck(["drapes", "compadres"]), false)
test(letterCheck(["deltas", "slated"]), true)
const isWordChain = arr => {

}

test(isWordChain(["row", "crow", "crown", "brown", "brawn"]), true)
test(isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]), true)
test(isWordChain(["meek", "meet", "meat", "teal"]), false)
test(isWordChain(["run", "runny", "bunny"]), false)
test(isWordChain(["fun", "fund", "find", "bind", "wind", "wild", "wile", "wiles"]), true)
test(isWordChain(["nut", "but", "bot", "boot", "loot", "look", "book", "brook"]), true)
test(isWordChain(["some", "tome", "tame", "lame", "flame", "flamer", "blamer", "blamers"]), true)
test(isWordChain(["a", "at", "hat", "that", "what", "flat"]), false)
test(isWordChain(["link", "blink", "wink", "sink"]), false)
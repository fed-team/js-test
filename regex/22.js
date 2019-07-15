const noYelling = str => {

}

test(noYelling("What went wrong?????????"), "What went wrong?")
test(noYelling("Oh my goodness!!!"), "Oh my goodness!")
test(noYelling("WHAT!"), "WHAT!")
test(noYelling("WHAT?"), "WHAT?")
test(noYelling("Oh my goodness!"), "Oh my goodness!")
test(noYelling("I just cannot believe it."), "I just cannot believe it.")
test(noYelling("I just!!! can!!! not!!! believe!!! it!!!"), "I just can not believe it!")
test(noYelling("That's a ton!! of cheese!!!!"), "That's a ton of cheese!")
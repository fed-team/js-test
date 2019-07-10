function chatroomStatus(users) {
	
}

testSimilar(chatroomStatus([]), "no one online")
testSimilar(chatroomStatus(["becky325"]), "becky325 online")
testSimilar(chatroomStatus(["becky325", "malcolm888"]), "becky325 and malcolm888 online")
testSimilar(chatroomStatus(["becky325", "malcolm888", "fah32fa"]), "becky325, malcolm888 and 1 more online")
testSimilar(chatroomStatus(["paRIE_to"]), "paRIE_to online")
testSimilar(chatroomStatus(["s234f", "mailbox2"]), "s234f and mailbox2 online")
testSimilar(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]), "pap_ier44, townieBOY and 4 more online")

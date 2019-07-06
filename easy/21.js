function chatroomStatus(users) {
	
}

Test.assertSimilar(chatroomStatus([]), "no one online")
Test.assertSimilar(chatroomStatus(["becky325"]), "becky325 online")
Test.assertSimilar(chatroomStatus(["becky325", "malcolm888"]), "becky325 and malcolm888 online")
Test.assertSimilar(chatroomStatus(["becky325", "malcolm888", "fah32fa"]), "becky325, malcolm888 and 1 more online")
Test.assertSimilar(chatroomStatus(["paRIE_to"]), "paRIE_to online")
Test.assertSimilar(chatroomStatus(["s234f", "mailbox2"]), "s234f and mailbox2 online")
Test.assertSimilar(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]), "pap_ier44, townieBOY and 4 more online")
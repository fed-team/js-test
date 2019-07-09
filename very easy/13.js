function concatName(firstName, lastName) {
    return lastName + ", " + firstName;   
	
}

test(`Doe, John`, concatName("John", "Doe"))
test(`Last, First`, concatName("First", "Last"))
test(`B, A`, concatName("A", "B"))
test(`,, ,`, concatName(",", ","))
function concatName(firstName, lastName) {
    return firstName + ", " + lastName;   
	
}

test(`Doe, John`, concatName("John", "Doe"))
test(`Last, First`, concatName("First", "Last"))
test(`B, A`, concatName("A", "B"))
test(`,, ,`, concatName(",", ","))
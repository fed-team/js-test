function nextEdge(side1, side2) {
	return side1+side2-1;
}

test(8, nextEdge(5, 4))
test(10, nextEdge(8, 3))
test(15, nextEdge(7, 9))
test(13, nextEdge(10, 4))
test(8, nextEdge(7, 2))
const convertDate = str => {

}

testSimilar(convertDate("January 9, 2019"), [1, 9, 2019])
testSimilar(convertDate("Jan 9, 2019"), [1, 9, 2019])
testSimilar(convertDate("01/09/2019"), [1, 9, 2019])
testSimilar(convertDate("01-09-2019"), [1, 9, 2019])
testSimilar(convertDate("01.09.2019"), [1, 9, 2019])
testSimilar(convertDate("March 3, 1901"), [3, 3, 1901])
testSimilar(convertDate("Mar 3, 1901"), [3, 3, 1901])
testSimilar(convertDate("03/03/1901"), [3, 3, 1901])
testSimilar(convertDate("03-03-1901"), [3, 3, 1901])
testSimilar(convertDate("03.03.1901"), [3, 3, 1901])
testSimilar(convertDate("August 8, 1666"), [8, 8, 1666])
testSimilar(convertDate("Nov 13, 1533"), [11, 13, 1533])
testSimilar(convertDate("04/15/1789"), [4, 15, 1789])
testSimilar(convertDate("12-23-1111"), [12, 23, 1111])
testSimilar(convertDate("02.28.1832"), [2, 28, 1832])
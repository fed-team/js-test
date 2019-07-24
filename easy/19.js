function timeForMilkAndCookies(date) {
  return date.getDate() == 24 && date.getMonth() == 11;
}

test(timeForMilkAndCookies(new Date(2013, 11, 24)), true);
test(timeForMilkAndCookies(new Date(3000, 11, 24)), true);
test(timeForMilkAndCookies(new Date(2154, 11, 11)), false);
test(timeForMilkAndCookies(new Date(2010, 11, 2)), false);
test(timeForMilkAndCookies(new Date(1980, 9, 24)), false);

const formatNumber = num => {
    num += '';
    return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

test(formatNumber(1000), "1,000");
test(formatNumber(1000000), "1,000,000");
test(formatNumber(20), "20");
test(formatNumber(0), "0");
test(formatNumber(12948), "12,948");
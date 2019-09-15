const formatNumber = num => {
    let numString = num.toString();
    

    for(i=numString.length-3;i>=0;i=i-3){

        const firstPart = numString.slice(0, i);
        const secondPart = numString.slice(i, numString.length);
        numString = `${firstPart},${secondPart}`;
    }
    return numString;
}


test(formatNumber(1000), "1,000");
test(formatNumber(1000000), "1,000,000");
test(formatNumber(20), "20");
test(formatNumber(0), "0");
test(formatNumber(12948), "12,948");
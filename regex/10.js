const formatNumber = num => {

    num = num.toString();
    const reg = /\d{3,}/gm;

    if(reg.test(num)){

        console.log(`i dont know how. think about it later`);

    }

}


// test(formatNumber(1000), "1,000");
// test(formatNumber(1000000), "1,000,000");
// test(formatNumber(20), "20");
// test(formatNumber(0), "0");
// test(formatNumber(12948), "12,948");
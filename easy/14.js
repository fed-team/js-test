function convertBinary(str) {
    let result = ``;
    str = str.toUpperCase();
        for(i=0;i<str.length; i++){
        if(str[i]<=`M`){
            result = `${result}0`;
        }else{
            result = `${result}1`;
        }
    }
    return result;
}

test(convertBinary("house"), "01110")
test(convertBinary("excLAIM"), "0100000")
test(convertBinary("moon"), "0111")
test(convertBinary("MOOn"), "0111") 
test(convertBinary("topsyTurvy"), "1111111111")
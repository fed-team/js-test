function convertBinary(str) {
    const alphabet= `abcdefghijklmnopqrstuvwxyz`;
    let binary=[];
    for(let i=0;i<str.length;i++)
    {
        if(alphabet.substring(0,13).includes(str[i].toLowerCase())){
            binary[i]='0';
        }
        else if(alphabet.substring(13).includes(str[i].toLowerCase())){
            binary[i]='1';
        }
    }
    return binary.join("");
}

test(convertBinary("house"), "01110")
test(convertBinary("excLAIM"), "0100000")
test(convertBinary("moon"), "0111")
test(convertBinary("MOOn"), "0111")
test(convertBinary("topsyTurvy"), "1111111111")
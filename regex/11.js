const removeSpecialCharacters = str => {

  const reg = /[^\w_\-\s]/gm;
  return str.replace(reg,"");
  

}

test(removeSpecialCharacters("The quick brown fox!"), "The quick brown fox")
test(removeSpecialCharacters("%fd76$fd(-)6GvKlO."), "fd76fd-6GvKlO")
test(removeSpecialCharacters("D0n$c sed 0di0 du1"), "D0nc sed 0di0 du1")
test(removeSpecialCharacters("cat_pic.jpeg"), "cat_picjpeg")
test(removeSpecialCharacters("519-555-8093"), "519-555-8093")
test(removeSpecialCharacters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)"), "h-drf_")
test(removeSpecialCharacters("Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???"), "Etiam porta sem malesu-ada magna mollis euismod")
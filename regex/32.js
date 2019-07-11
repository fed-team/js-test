const imgurUrlParser = str => {

}

test(imgurUrlParser('http://imgur.com/a/cjh4E'), 'album');
test(imgurUrlParser('http://imgur.com/gallery/59npG'), 'gallery');
test(imgurUrlParser('http://imgur.com/OzZUNMM'), 'image');
test(imgurUrlParser('http://i.imgur.com/altd8Ld.png'), 'direct');
test(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'), 'gallery');
test(imgurUrlParser('www.i.imgur.com/altd8Ld.png'), 'direct');
test(imgurUrlParser('i.imgur.com/altd8Ld.pgn'), 'invalid');
test(imgurUrlParser('imgur.com/gallery/altd8Ld.pgn'), 'invalid');
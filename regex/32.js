const imgurUrlParser = str => {
    if (/^http:\/\/imgur\.com\/a\//i.test(str)) { return 'album' }
    else if (/^http:\/\/imgur\.com\/gallery\//i.test(str)) { return 'gallery' }
    else if (/^http:\/\/imgur\.com\/[a-z]+$/i.test(str)) { return 'image' }
    else if (/^(http:\/\/|www\.)i\.imgur\.com\/[a-z]+\.(jpg|png)/i.test(str)) { return 'direct' }
    else { return 'invalid' }
}

test(imgurUrlParser('http://imgur.com/a/cjh4E'), 'album');
test(imgurUrlParser('http://imgur.com/gallery/59npG'), 'gallery');
test(imgurUrlParser('http://imgur.com/OzZUNMM'), 'image');
test(imgurUrlParser('http://i.imgur.com/altd8Ld.png'), 'direct');
test(imgurUrlParser('http://imgur.com/gallery/59npG#g1UvPtF'), 'gallery');
test(imgurUrlParser('www.i.imgur.com/altd8Ld.png'), 'direct');
test(imgurUrlParser('i.imgur.com/altd8Ld.pgn'), 'invalid');
test(imgurUrlParser('imgur.com/gallery/altd8Ld.pgn'), 'invalid');
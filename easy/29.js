function transformUpvotes(str) {
    const arrStrings = str.split(' ');
    const arr = [];
    arrStrings.forEach(el => {
        if (el.endsWith('k')) {
                if (el.charAt(el.length - 3 === '.')) {
                    arr.push(el.replace(/\.[0-9]k/, el.charAt(el.length - 2) + '00') * 1);
                } else if (el.charAt(el.length - 4 === '.')) {
                    arr.push(el.replace(/\.[0-9][0-9]k/, el.charAt(el.length - 3) +  el.charAt(el.length - 2) + '0') * 1);
                } else {
                arr.push(el.replace('k', '000') * 1);
            }
        } else {
            arr.push(el * 1);
        }
    });
    return arr;
}

test(transformUpvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
test(transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32])
test(transformUpvotes('6.8k 13.5k'), [6800, 13500])
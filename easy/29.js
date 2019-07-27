function transformUpvotes(str) {
    return str.split(" ").map(number => number.includes("k") ? parseInt(number.replace("k", '') * 1000) : parseInt(number));
}

testSimilar(transformUpvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
testSimilar(transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32])
testSimilar(transformUpvotes('6.8k 13.5k'), [6800, 13500])
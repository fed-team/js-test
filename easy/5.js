function removeNull(arr) {
<<<<<<< HEAD
    return arr.filter(function(el){
        return el !== null;
    })
=======
    
>>>>>>> 8c0b4c51e337aae063d1a5e0ad57107227c19f45
}

testSimilar(removeNull(['a', null, 'b', null]), ['a', 'b'])
testSimilar(removeNull([null, null, null, null, null]), [])
testSimilar(removeNull([7, 8, null, 9]), [7, 8, 9])
testSimilar(removeNull([7, null, 8, null, 9]), [7, 8, 9])
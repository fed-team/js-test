function isOmnipresent(arr, val) {
    let count = 0;
    for(i=0;i<arr.length;i++){ //cala tablica tablic

        for(j=0;j<arr[i].length;j++){ //petla po malej tablicy
            
            if(arr[i][j] == val){
                count++;
            }
        }
    }
    
    return count>=arr.length;
}

test(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
test(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
test(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)
test(isOmnipresent([[5], [5], [5], [6, 5]], 6), false)
test(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1), true)
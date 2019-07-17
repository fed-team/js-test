function transformUpvotes(str) {

    arr = str.split(` `);

    for(i=0; i<arr.length; i++){
        
        if(arr[i].indexOf(`k`)==arr[i].length-1){
            arr[i] = arr[i].slice(0,arr[i].length-1);
            arr[i] = parseFloat(arr[i]) * 1000;
        }else{
            arr[i] = parseFloat(arr[i]);
        }
    }
    
    // console.log(arr);
    return arr;

}
test(transformUpvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
test(transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32])
test(transformUpvotes('6.8k 13.5k'), [6800, 13500])
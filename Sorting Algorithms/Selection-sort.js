// small values small vales in sorted position
// minimum value and put that at the front
function selectionSort(arr){
    for(i=0;i<arr.length;i++){
        var lowest = i;
        for(j=i+1;j<arr.length;j++){
           if(arr[j] < arr[lowest]) {
               console.log(arr[j],arr[lowest]);
               lowest = j
           }
        }
        let temp = arr[i];
        arr[i]= arr[lowest]
        arr[lowest] = temp
    }

    return arr
}

console.log(selectionSort([25,3,26,9,1,60]));

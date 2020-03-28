// Rather than eliminating one element at time, can element half of
// the remaining elements 
// Binary search only works on sorted array
// [Divide and Conquer]
// Worst case O(log n) best case O(1)


function binarySearch(arr,elem){
    let start = 0;
    let end = arr.length-1
    let middle = Math.floor((start+end)/2) //floor 3.5=3
    console.log(middle);
    while(arr[middle]!==elem && start<=end){
        
        if(elem < arr[middle]){
            end = middle-1
        }else{
            start = middle+1
        }
        middle = Math.floor((start+end)/2)
    }
    console.log(start,middle,end);
  
    if(arr[middle]===elem){
        return middle
    }
    return 'not found'
    

}
console.log(binarySearch([2,5,6,9,13,15,28,89],15));


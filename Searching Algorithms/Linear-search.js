function linearSearch(arr,num){
    console.log(arr);
    console.log(arr.includes(num));//also can use indexOf
    for(let i=0;i<arr.length;i++){
       if(arr[i]===num){
           return 'found'
       }
    }
    return 'not found'
}

console.log(linearSearch([5,6],6));
// Time complexity O(n)

// Best case O(1) worst case O(n)
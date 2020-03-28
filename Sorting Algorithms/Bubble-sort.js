// largest value bubbled to the top by [swapping the elements]
//Nearly sorted => Best case O(n) Worst case O(n^2)

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap!
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([12, 50, 9, 60, 3]));

function bubbleSort(arr){
    let noSwap;
  for (let i = arr.length; i > 0; i--) {
      noSwap = true
    for (let j = 0; j < i-1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false
      }
    }
    if(noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([12, 50, 9, 60, 3]));
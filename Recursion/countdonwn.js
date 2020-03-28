function countdown(number) {
  if (number <= 0) {
    //Base case
    console.log("all done");
    return;
  }
  console.log(number);
  number--;
  countdown(number);
}

countdown(5);

function power(base, exponential){
    if(exponential===0) return 1
    return base * power(base,exponential-1)
}

console.log(power(5,2));

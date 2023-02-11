
var array = new Array(1,2,3,4,5,6,7,8,9,10);
var sum = 0;

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    
    sum += element;
    
}

console.log("Sum of numbers 1 to 10: ", sum);
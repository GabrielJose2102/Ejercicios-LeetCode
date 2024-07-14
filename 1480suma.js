//1480. Suma continua de una matriz unidimensional

//Solución propuesta por mi
let runningSum = function(nums) {
    let numero = 0;
    let salida = [];
    for (let i = 0; i < nums.length; i++) {
       salida[i] = numero += nums[i];
    }
    return salida;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));




//Solución propuesta por la comunidad
var runningSum2 = function (nums) {
    let sum = 0
    let cumulativeSum = []
    nums.map((el) => {
        sum = sum + el;
        cumulativeSum.push(sum)
    })
    return cumulativeSum
};

console.log(runningSum2([1,2,3,4]));
console.log(runningSum2([1,1,1,1,1]));
console.log(runningSum2([3,1,2,10,1]));
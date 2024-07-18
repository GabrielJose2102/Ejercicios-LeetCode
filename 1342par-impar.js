// 1342. Número de pasos para reducir un número a cero

/**
 * @param {number} num
 * @return {number}
 */

//Esta no me la acepto LeetCode
let steps = 0;
let numberOfSteps2 = function(num) {
    if (num == 0) {
        return steps
    }
    
    if (num % 2 === 0) {
        num = num / 2;
    } else {
        num = num - 1;
    }
    steps++
    return numberOfSteps(num);
};

//console.log(numberOfSteps2(14));
//console.log(numberOfSteps2(8));
//console.log(numberOfSteps2(123));


//Esta si fue aceptada
let numberOfSteps = function(num) {
    let steps = 0;
    while (num !== 0) {
        
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps++
    }

    return steps;
};

console.log(numberOfSteps2(8));
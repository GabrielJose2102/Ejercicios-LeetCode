//412. Zumbido efervescente

/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
    let answers = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answers.push('FizzBuzz');
        } else if (i % 3 === 0) {
            answers.push('Fizz');
        } else if (i % 5 === 0) {
            answers.push('Buzz');
        } else {
            answers.push(String(i));
        }
    }
    return answers;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(30));
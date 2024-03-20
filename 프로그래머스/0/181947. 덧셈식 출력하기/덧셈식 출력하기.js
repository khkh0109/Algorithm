const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num1 = +input[0];
    const num2 = +input[1];
    const result = num1 + num2;
    
    console.log(`${num1} + ${num2} = ${result}`);
});
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ')[0];
    
    const isEven = +input % 2 === 0;
    console.log(isEven ? `${input} is even` : `${input} is odd`)
}).on('close', function () {
    n = Number(input[0]);
});
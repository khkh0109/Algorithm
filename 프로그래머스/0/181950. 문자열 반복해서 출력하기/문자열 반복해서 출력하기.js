const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(input[0].repeat(+input[1]))
    
    
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
});
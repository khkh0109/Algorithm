const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = '';
    [...str].forEach(char => {
        const isLowerCase = char === char.toLowerCase();
        
        if(isLowerCase) {
            result += char.toUpperCase();
        } else {
            result += char.toLowerCase();
        }
    });
    
    console.log(result);
});
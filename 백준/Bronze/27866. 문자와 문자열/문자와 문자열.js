'use strict';
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(input) {
  const [s, i] = input;
  console.log(s[i - 1]);
}

solution(input);
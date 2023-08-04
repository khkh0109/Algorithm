'use strict';
const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0].toUpperCase().split('');

solution(input);
function solution(input) {
  const set = new Set(input);
  const charArr = [...set];

  const answer = [];

  for(const char of charArr) {
    let count = 0;
    for(const item of input) {
      if(char === item) count++;
    }
    answer.push(count);
  }

  const tmpArr = [];
  const max = Math.max(...answer);
  for(let i = 0; i < answer.length; i++) {
    if(max === answer[i]) {
      tmpArr.push(charArr[i]);
    }
  }
    
  console.log(tmpArr.length <= 1 ? tmpArr[0] : '?') 
}
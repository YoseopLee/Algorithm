const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const arr = input.shift().split(' ').map(v=>+v);
let max = 0;
let answer = 0;

for (x of arr) {
    let sum = x.toString().split('').reduce((a,b) => a + Number(b), 0);
    if (sum > max) {
        max = sum;
        answer = x;
    } else if (sum === max) {
        if (x > answer) {
            answer = x;
        }
    }
}

console.log(answer);
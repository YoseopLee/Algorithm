const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const arr = input.shift().split(' ').map(v=>+v);
let answer = [];

const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 ) return false; 
    }
    return true;
}

for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
}
console.log(answer.join(' '));
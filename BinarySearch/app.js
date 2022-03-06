const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, K] = input.shift().split(' ').map(v=>+v);
const inputs = input.shift().split(' ').map(v=>+v).sort((a,b) => a-b); // 오름차순 정렬

let start = 0;
let end = inputs.length - 1;
let answer = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (inputs[mid] > K) {
        end = mid - 1;
    } else if (inputs[mid] < K) {
        start = mid + 1;
    } else {
        answer = mid + 1; 
        break;
    }
}
console.log(answer);
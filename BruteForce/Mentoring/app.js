function solution(test) {
    let answer = 0;
    let M = test.length; // test 횟수
    let N = test[0].length; // 학생수

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            let cnt = 0;
            for (let k = 0; k < M; k++) { // test 시작
                let pi = 0;
                let pj = 0;
                for (let s = 0; s < N; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === M) answer++;
        }
    }
    return answer;
}


let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
/* while_mission01.js 

1, 2, 3, 4 식으로 계속 합계를 구한다.
합계값이 100이 넘어간 순간의 마지막 더한 값을 출력해 주세요.

*/

let sum = 0;
let num = 1;
while (true) {
    sum += num;
    if(sum > 100) { break; }
    num++;
}
console.log('num', num);
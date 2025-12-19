/* continue_break_mission01.js
*/
//1~10 오름차순으로 세로로 숫자 출력
//짝수만 출력되게

for(let i = 1; i <= 10; i++) { //돈 터치
    if(i % 2 == 1) {continue;}
    console.log(i);
}
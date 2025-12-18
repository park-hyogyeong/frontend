/* if.js
조건문(분기문, if문)

if(식-결과타입은 boolean) {
    만약 식이 true라면 {} 중괄호 사이에 있는 모든 코드가 실행이 된다.
    false라면 실행이 되지 않는다.
}

*/
// const rVal = ???; //1~25까지 랜덤숫자 나올 수 있도록 작성해 주세요.

const rVal = parseInt( Math.random() * 25.0 ) + 1;
console.log('parseInt(rVal)', parseInt(rVal));

console.log('rVal:', rVal);
//짝수였을 때만 "짝수입니다." 출력
if( rVal % 2 == 0 ){
    console.log('짝수입니다.');
}

// if(식) { //식이 true인 경우 실행되는 {}
// } else { //식이 false인 경우 실행되는 {}
// }
//식이 true라면 if(식)(else 앞)의 식까지만 보고 빠져나옴-else식은 안 봄

console.log('-------')

//rVal값이 15 미만이면 "15보다 작습니다."가 출력되고 아니면 "15 이상입니다." 출력되도록
if(rVal < 15){
    console.log('15보다 작습니다.');
} else {
    console.log('15 이상입니다.');
}
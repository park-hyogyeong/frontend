/* fn_mission02.js 

abs를 리턴 함수로 만들고
콘솔에는 "절대값: 리턴한 값" 출력해 주세요.

리턴값이 10이었을 때

"절대값: 10" 이렇게 출력해 주세요.
*/

returnbbb(10);
function returnbbb(num) {
    return (num < 0? -num : num );
}
    const returnVal = returnbbb(-10)
   
    console.log("절대값:", returnVal)


function abs(num) {
    return num < 0 ? -num : num;
}

const result1 = abs(-10);
console.log('result1:', result); //한줄로 console.log('result1:', abs(-10)); 이렇게도 가능


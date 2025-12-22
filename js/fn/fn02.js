/* fn02.js 

보이드(void) 함수: 함수 호출하고 리턴만 하는 함수
리턴(return) 함수: 함수 호출하고 리턴할 때 값과 함께 리턴하는 함수
*/

function voidAdd(n1, n2) {
    let sum = n1 + n2;
    return; //생략 가능
    //결과값을 찍는 게 목표
}

function returnAdd(n1, n2) {
    let sum = n1 + n2;
    return sum; //생략 불가능(값과 함께 돌아가겠다를 명시해야 하기 때문)
    //결과값을 찍고 리터값을 들고 오는 게 목표
}

const voidVal = voidAdd(10, 20);
voidAdd(10,20); //void 함수는 외롭게 있어야 한다.(혼자 독단적으로)
const returnVal = returnAdd(10, 20); //return 함수는 리턴값을 보통 저장한다.

console.log('voidVal:', voidVal); //값이 한번도 대입된 적이 없다.(return)을 만나서
console.log('returnVal:', returnVal);
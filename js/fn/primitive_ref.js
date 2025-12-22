/* primitive_ref.js 

프라머티브타입(일반타입)-주소값 제외한 모든 값 vs 레퍼런스타입(참조타입)-주소값
*/

const changeNum = (n) => {
    n = 20;
}

let num = 10; //일반타입(리터럴 10)
//changeNum 함수 호출하면서 num이 가지고 있는 값 전달

changeNum(num); 
console.log('num:', num);

console.log('-----');
const changeBoxNum = (box) => { //동등한 값을 가지고 있지 동일하진 않다. 그러나 같은 주소값을 가짐
    box = {
        num: 30
    }
    box.num = 20;

} //void 함수

let box = {
    num: 10
};
console.log('box.num:', box.num);
changeBoxNum(box); //동등한 값을 가지고 있지 동일하진 않다. 그러나 같은 주소값을 가짐
console.log('box.num:', box.num);

/* cb04.js 배열의 map 함수, 새로운 배열을 만드는 건 filter 함수랑 같음. 
map 함수는 [} 안의 아이템 값을 변경할 수는 있으나(안 바뀔 수도 있고), 길이가 변하진 않는다.
*/

const arr = [3, 88, 76, 9, 45, 65 ];

//아이템 모두 더하기 +2처리한 새로운 배열 생성
//const arr2 = arr.map(item => item + 2 );
const arr2 = arr.map( item => { 
    return item + 2;
}); //위의 것이랑 결과는 같게 나옴
console.log(arr2);
console.log(arr);
//filter랑 map만 새로운 배열을 만드는 게 목표
//forEach, map, filter는 원본은 해치지 않음


/* cb04_mission02.js
arr에서 짝수만 골라내고 나누기 2한 배열을 만들어 주세요.
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//[ 44, 38, 17 ]

//체이닝 기법
const arr2 = arr.filter( num => num % 2 === 0)
                .map(num => num/2)
                .forEach(item => console.log('item:', item))
                ;

const arr3 = arr.filter(item => !(item % 2));
console.log(arr2);
const arr4 = arr2.map( item = item / 2 )
console.log(arr3);


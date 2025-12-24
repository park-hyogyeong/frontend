/* ch03_mission01.js 
arr 배열에서 70 이하 값들만 있는 새로운 배열을 만들어 주세요.
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];
const Arr = arr.filter(num => num <= 70);
console.log(Arr);

//arr 배열에서 앞의 4개의 숫자만 (3, 88, 76, 9) 살린 새로운 배열을 만들어 주세요.
const arr3 = arr.filter((item, index) => index < 4);
//const arr3 = arr.filter((item, i) => i < 4); 간략히 이렇게도 됨
console.log(arr3);
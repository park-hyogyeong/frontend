/* array.js
변수, 상수는 값을 1개만 저장할 수 있다.

숫자 5개를 저장하여 사용해야 하는 상황이 발생!
ex) let num1 = 5, num2 = 10, num3 = 15, num4 = 20, num5 = 25;

여러 값을 한 곳에 담기 위해 배열을 사용, 구분을 index(숫자)로 한다.
index(방 번호)는 0번부터 시작
*/

const arr = [ 5, 10, 15, 20, 25 ]; // []대괄호는 배열 생성, 공간 할당&초기화 마친 상태 //arr은 배열의 주소값이 저장(여러 값을 한 곳에 넣을 때)
const arr2 = new Array(2000); //배열 공간만 할당, 값은 넣지 않은 상태 //잘 쓰지는 않음?-공간 할당할 때 사용
//Array 생성자 함수

console.log('arr.length:', arr.length);
console.log('arr2.length:', arr2.length);
arr[1] = 11; //로 변경이 가능, 위 예시에서는 10이었지만 변경 가능
console.log(arr[0], arr[1], '...', arr[4]);
//console.log('arr[5]:', arr[5]); 이렇게 없는 방번호를 입력하면 결과값이 arr[5] = undefined라 뜸

const arr3 = [];

arr3.push(1);
arr3.push(2);
arr3.push(3);
// 접근할 땐 .으로(메소드 호출 가능, 607p)
console.log('arr3.length:', arr3.length); //length는 3(index는 0부터 시작해서)
//뒤의 arr3.length는 변수
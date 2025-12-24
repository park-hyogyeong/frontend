/* cb03.js 배열의 filter 함수, 배열에서 필요한 아이템들만 쏙 뽑아서
새로운 배열을 만들 때 사용
*/

const arr = [ 3, 88, 76, 9, 34, 65 ];

//const oddArr = arr.filter(item => item % 2 === 1);//=== 1은 생략 가능(0 빼고는 다 true로 처리해서?)
const oddArr = arr.filter( (item) => {  // 메소드 앞(arr.filter)에 =을 붙이면 리턴 메소드
    return item % 2 === 1; //return으로 true는 살리고 false는 버린다?
});
console.log(oddArr);
console.log(arr);
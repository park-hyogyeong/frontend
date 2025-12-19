/* for_array02.js
    반복문을 사용하여 배열에 들어있는 모든 값을 더하여 더한 값을 출력
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ];

let sum = 0;
for(let i=0; i<arr.length; i++) {
    sum += arr[i];
}
console.log('합계:', sum); 

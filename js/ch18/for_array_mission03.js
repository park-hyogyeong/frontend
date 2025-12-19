/* for_array03.js
    배열에 있는 값들을 홀수는 홀수대로 짝수는 짝수대로 모두 더하여 출력
*/
const arr = [ 3, 8, 11, 86, 43, 22, 27 ];

let sum = 0;
let sum1 = 0;
for(let i=0; i<arr.length; i++) {
  if(arr[i] % 2 == 0) {
    sum += arr[i]
  } else {
    sum1 += arr[i]
  }
}

console.log(sum); 
console.log(sum1); 

/*
const arr1 = [ 3, 8, 11, 86, 43, 22, 27 ]; 
const result = [0, 0]; //[0, 0]을 줘야 결과값에 변화가 없이 그대로 적용?
const resultStr = ['짝수', '홀수'];

for(let i=0; i<arr.length; i++) {
    const item = arr1[i];
    result[item % 2] += item;
}

for(let i=0; i<result.length; i++) {
    console.log(`${resultStr[i]}: ${result[i]}`);
}
*/
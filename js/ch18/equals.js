/* equals.js

*/

const val1 = '10', val2 = 10;


console.log('val1 == val2:', (val1 == val2)); //타입이 다르기에 문자열 '10'을 숫자 10으로 형변환을 함, 형변환은 ==에서만
console.log('val1 === val2:', (val1 === val2)); //타입도 다 같아야 함, 다르면 false 뜸
console.log('val1 ===\'10\':', (val1 === '10')); //역슬러시를 주면 ''안에 ''주기 가능?
console.log("val1 === '10':", (val1 === '10')); 
console.log('10 === val2:', (10 === val2));

// val1과 val2를 비교했을 때 같은 값이면 true가 나오게끔 하고 싶다면 강제 형변환을 한 후

console.log('parseInt(val1) === val2:', parseInt(val1) === val2);
console.log('Number(val1) === val2:', Number(val1) === val2); //숫자랑 숫자를 비교할 때 더 추천
// (val1)이랑 (val2)가 뒤에 소수점이 다를 수도 있는데 이때 위의 parseInt를 쓰면 
// 소수점이 날아가 val1이랑 val2가 같은 정수로 처리돼서?
/*
Math.random() 메소드 호출하면
0.0000 ~ 0.9999 사이의 랜덤값을 리턴한다.
*/
let rVal = Math.random();
let rVal2 = console.log('rVal:', rVal);
console.log('rVal2:', rVal2);


let rVal3 = Math.random() * 10;
//최소값~최대값
//0~9.999
console.log('rVal3:', rVal3);
console.log('parseInt(rVal3):', parseInt(rVal3));

let rVal4 = parseInt(Math.random() * 10);
//이때 나올 수 있는 숫자는 0~9까지임
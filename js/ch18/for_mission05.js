/* for_mmission05.js
*/
const dan = parseInt(Math.random() * 8.0) + 2; //2~9 랜덤값
console.log('dan:', dan); //5가 나왔을 때

//5 * 1 = 5
//5 * 2 = 10
//5 * 3 = 15
//...
//5 * 9 =45가 되도록

for (let i = 1; i<= 9; i++) { 
  console.log(`${dan} x ${i} = ${dan * i}`);
}
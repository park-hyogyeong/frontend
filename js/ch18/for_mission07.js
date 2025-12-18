/* for_mission07.js
*/

const star = parseInt(Math.random() * 5.0) + 3; //3~7 사이 랜덤값

console.log('star:', star);

//예)5가 나왔을 때 *****개, 7이 나왔을 때 *******이 나오도록

for (let i=0; i<star; i++) {
    console.log('*');
}
console.log('-------------');
let str = '';
for(let i=0; i<star; i++) {
    str = str + '*';
}
console.log(str);
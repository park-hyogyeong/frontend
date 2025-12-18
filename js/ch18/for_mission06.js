/* for_mission06.js
구구단 2단~9단까지 출력

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
2 x 9 =18
---
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
---
4 x 1 = 4
...
9 x 9 = 81
*/

let isFirst = true;
for (let i = 2; i < 10; i++) { 
    if(isFirst) {
        isFirst = false
    } else {
        console.log('----');
    }

    for (let j = 1; j <10; j++) {
        console.log(`${i}*${j}=${i*j}`);
   }
}

for (let i = 2; i<10; i++) {
    if(isFirst) {
        isFirst = false
    } else {
        console.log('----');
    }
    for (let j = 1; j <10; j++) {
        console.log(`${i}*${j}=${i*j}`);
    }
}
   // console.log('----'); //단이 끝날 때마다 구분 표시를 하고 싶을 때
   
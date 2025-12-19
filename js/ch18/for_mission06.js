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
//뜻: 지금이 첫 번째 반복이야?
//true: 응, 지금이 첫 번째야
//false: 아니, 이미 한 번은 돌았어
for (let i = 2; i < 10; i++) { 
    if(isFirst) {
        isFirst = false
    } else {
        console.log('----');
    }
    //if else 구문 해석
    //if (지금이_첫번째야?) {
    //    이제_첫번째_아님으로_바꿔
    //} else {
    //    구분선_출력
    //}
    //즉, 처음엔 아무 것도 하지 말고, 두 번째부터는 단이 바뀔 때마다 -----을 찍기 위한 코드
    for (let j = 1; j <10; j++) {
        console.log(`${i}*${j}=${i*j}`);
   }
}
   // console.log('----'); //단이 끝날 때마다 구분 표시를 하고 싶을 때
   
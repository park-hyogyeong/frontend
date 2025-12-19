/* continue_break.js
continue 키워드와 break 키워드 사용법 학습

break: 나를 감싸고 있는 반복문 빠져 나오기
continue: for문인 경우 증감식 순서로 바로 가고, while문이었으면 조건식 순서로 바로 간다.
*/

//1~10까지 세로로 오름차순으로 출력하는 반복문
for(let i = 1; i <= 10; i++) {
    if(i == 5) { break; }
    console.log(i);
}
console.log('--끝--');

for(let i = 1; i <= 10; i++) {
    if(i == 6) { continue; }
    console.log(i);
}
console.log('--끝--');
//continue는 {console.log(i)}로 안 가고 바로 증감식으로 감

for(let i = 0; i<10; i++) {
    for(let k = 0; k < 10; k++) {
        if(k == 5) { break; }
        console.log(`i:${i}, k:${k}`);
    }
}

console.log('------반복문에 레이블(별명) 지정');

outerLoop:
for(let i = 0; i<10; i++) {
    for(let k = 0; k < 10; k++) {
        if(k == 5) { break outerLoop; }
        console.log(`i:${i}, k:${k}`);
    }
}

console.log('------');

outerLoop:
for(let i = 0; i<10; i++) {
    for(let k = 0; k < 10; k++) {
        if(k == 5) { continue outerLoop; } 
        //{ continue outerLoop; }은 { break; }랑 같아서 별 쓸 일 없다.
        //break; 안쪽 for문 뒤에 내용이 없다면 같은데 내용이 있다면 다를 수 있다.
        console.log(`i:${i}, k:${k}`);
    }

}


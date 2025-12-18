/* object.js
자바스크립트에서 객체를 만드는 방법: {} 중괄호 만든다.

객체는 속성이랑 메소드로 이루어질 수 있다.
키 : 값
key: value(속성값 or 함수(function))

person에 저장되는 값은 객체의 주소값 하나!!!
객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출할 수 있다.(주소값.)
*/
const person1 = { /* 객체 만들 때 쓰는 문법은 {} */
    name: '김철수',
    age : 25,
    married: false,
    run: function() { console.log('나는 뛴다.!!!'); }
};
// name, age, married는 속성, run은 메소드(value 부분에 함수가 있으면 메소드)
// function run() { console.log('나는 뛴다.!!!'); } // 함수?

const person2 = person1; //shallow copy (얕은 복사, 주소값을 복사함)
// 객체 자체를 복사하는 것은 deep copy (깊은 복사, 객체를 복사함)
// 동등성, 동일성

console.log('person1.name:', person1.name);
console.log('person2.name:', person1.name);
person1.name = '홍길동';
person1.age = 30;

const person3 = {
    name: '김철수',
    age : 25,
    married: false
}
// person1이랑 person3은 동등하지 동일하지는 않다.(person3은 다른 주소값이 만들어짐)

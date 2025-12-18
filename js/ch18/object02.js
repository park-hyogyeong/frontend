/* object02.js
*/
const person1 = {
    name: '김철수',
    age: 25,
    married: false
};
console.log(typeof person1); //object(객체이기에)
console.log(person1);

//person1이 가리키고 있는 객체의 married 속성값을 true로 수정하기

console.log('person1.name:', person1.name);
person1.married = true; //수정을 할 땐 대입연산자(=)로
//person1.married = true; 이럴 땐 console.log(!person1.married);로 하면 
//married의 속성값이 true로 됨(눈속임용, 진짜 married값이 바뀐 건 아님)
   
console.log(person1);

person1['age'] = 30;
const key = 'name';
person1[key] = '권수영';
//person1['name'] = '권수영'; //이렇게 작성한 것과 같다.
console.log(person1);

//자바스크립트는 객체 생성 이후에 속성추가가 가능하다. (동적할당)
person1.address = '대구'
person1['height'] = 174.3;
console.log(person1);
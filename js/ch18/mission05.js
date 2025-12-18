const person = {
    married: false
};

//person이 가리키고 있는 객체의 married 속성이 있는지는 알지만
//값은 모른다는 전제, 현재 person married 상태를 반대로 만들어 주세요.

//
person.married = (!person.married);
//

console.log(person); //married가 false가 나오면 됨
//위의 married가 true라면 결과값은 false가 나와야 함


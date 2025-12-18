/*
식별자(변수명, 상수명, 함수명 등등 ~~명) 명명 규칙
- 네이밍은 숫자로 시작하면 안된다.(let 1bbb; 이런 거 안됨)
- 특수기호는 _, $만 사용 가능
- 예약이 사용 금지(특정 단어는 역할이 있는데 식별자(~~명)으로 사용이 안됨)
-스페이스 사용 불가(let abcd; 이런 거 안됨)
-한글 가능하나 영어, 숫자, 특수기호만 사용

명명 기법
-카멜 케이스 (Camel Case)
-파스칼 케이스 (Pascal Case)
-스네이크 케이스 (Snake Case)

-케밥 케이스 (Kebap Case)

* 단어 여러 개를 합쳐서 식별자를 만들 때 사용하는 기법
my, name, is, hong 단어를 합쳐서 식별자를 만들 때
Camel Case: myNameIsHong
Pascal Case: MyNameIsHong
Snake Case: my_name_is_hong

Kebap Case: my-name-is-hong(특수기호는 _랑 $만 쓸 수 있기에 케밥 케이스는 사용하고 싶어도 사용 x)
*/

//const let; //예약어 사용

//let ad cd; //스페이스 사용 불가

let 한글; //한글 식별자는 사용하지 말자

# 김민정 [202030302]
## [03월 30일]
>#### 4 if else if 조건문<br/>
- 중첩 조건문의 중괄호를 생략했을 때 만든 조건문이다. if else if 조건문은 중복되지 않는 세 가지 이상의 조건을 구분할 때 사용한다.<br/>
>##### 5 switch 조건문<br/>
- break 키워드는 switch 조건문이나 반복문을 빠져나갈 때 사용한다. 조건문의 괄호 안에는 비교할 값을 입력한다. <br/>
>##### 6 삼항 연산자<br/>
- 연산자이지만 프로그램의 진행을 조건에 따라 변화시킬 수 있다. 코드가 복잡해 보이기 때문에 한 줄로 표시할 수 있을 때만 사용하면 좋다. 자바스크립트에서 삼항 연사자는 해당 변수가 undefined인지 활인할 때 자주 사용한다.<br/>
 (<볼표현식> ? <참> : <거짓>)<br/>
 >##### 7 짧은 초기화 조건문<br/>
 - ||연산자 <br/>
 - A||B에서 A가 참이라면 A로 대치된다.<br/>
 >##### 8 조금 더 나아가기<br/>
- Node.js에서 작동하는 자바스크립트는 단순한 코드로 입력을 받을 수 없다. 그 이유는 Node.js의 무언가를 기다리는 느린 코드를 절대 만들지 못하게 하겠다는 사상때문이다. <br/>
>##### 1 배열<br/>
- 배열은 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형이다. 배열 안에 들어 있는 각 자료를 요소라고 하고, 배열의 요소에 접근할 때는 대괄호를 사용하며, 대괄호 안에 넣는 숫자를 인덱스라고 한다.<br/>
>##### 2 while 반복문<br/>
- 불표현식이 참인 동안에는 중괄호 안의 문장을 계속 실행한다.<br/>
>##### 3 for 반복문 <br/>
- 원하는 횟수만큼 반복하고 싶을 때 사용한다. <br/>
## [03월 23일]
>##### 3.3 불<br/>
- 불은 참과 거짓으로 표현할 때 사용한다.<br/>
- 불은 true와 false 두 가지 값만 있다.<br/>
- 자바스크립트는 크기를 비교하는 연산자로 참과 거짓을 만들고, 이러한 연산자를 비교 연산자라고 한다. <br/>
- 비교 연산자를 사용하면 불을 만들 수 있다. 그리고 불끼리는 논리 연산자를 사용할 수 있다. <br/>
(+ !-논리 부정 연산자는 숫자 부호를 반대로 만드는 - 연산자와 같은 형태로 사용한다.<br/>
||-논리합 연산자는 2개의 피연산자 중에 하나만 true이면 전체가 true가 되는 연산자이다. <br/>
&&-논리곱 연산자는 2개의 피연산자 모두 true이어야 전체가 true가 되는 연산자입니다.)<br/>
>##### 4변수
- 변수는 값을 저장할 때 사용하는 식별자이다. 모든 자료형을 저장할 수 있다.<br/>
- 변수는 다음 두 단계를 거쳐 사용할 수 있다.<br/>
(1 변수를 선언한다.-변수를 만드는 것을 말한다.<br/>
2 변수에 값을 할당한다.-변수에 값을 저장하는것을 말한다.)<br/>
변수를 초기화한다.-변수를 선언한 후 처음 값을 할당하는 것을 말한다.<br/>
>##### 5 복합 대입 연산자<br/>
- 복합 대입 연산자는 자료형에 적용하는 기본 연산자와 = 연산자를 함께 사용한다.(a+10)<br/>
(+= - 숫자 덧셈 후 대입 연산자<br/>
-= - 숫자 뺄셈 후 대입 연산자<br/>
*= - 숫자 곱셈 후 대입 연산자<br/>
/= - 숫자 나눗셈 후 대입 연산자<br/>
)<br/>
>##### 6 증감 연산자<br/>
- 변수에 적용할 수 있는 연산자. 단항 연산자로 변수 앞과 뒤에 ++기호와 --기호를 붙여 만든다.<br/>
(변수++ - 기존 변수 값에 1을 더한다.(후위)<br/>
++변수 - 기존 변수 값에 1을 더한다. (전위)<br/>
변수-- - 기존 변수 값에서 1을 뺀다.(후위)<br/>
--변수 - 기존 변수 값에서 1을 뺀다.(전위))<br/>
>##### 7 자료형 검사<br/>
- 자바스크립트는 하나의 변수에 여러 자료형을 넣을 수 있다.<br/>
- 원하지 않는 자료형이 변수에 들어갈 수도 있기에 자료형을 검사해야 할 때가 많다.<br/>
- 변수의 자료형을 확인할 때는 typeof 연산자를 사용한다.<br/>
>##### 8 undefined 자료형<br/>
- 초기화되지 않은 것으로 표현하는 자료형이다. undefined 자료형은 변수를 선언했으나 초기화하지 않았을 때 나타난다.<br/>
>##### 9 강제 자료형 변환<br/>
- 어떤 자료형을 특정 자료형으로 강제 변환하고 싶을 때 함수를 사용한다.<br/>
(Number() - 숫자로 자료형 변환한다.<br/>
String() - 문자열로 자료형 변환한다.<br/>
Boolean() - 불로 자료형 변환한다.)<br/>
>##### 9.1 Number() 함수와 NaN
- 문자열이나 불을 숫자로 변환할 때 사용하는 함수이다.<br/>
>##### 9.2Boolean() 함수
- 자바스크립트에서 Boolean() 함수를 사용하면 0,NaN, ""[빈문자열], null, undefined 5개의 요소는 false로 변환된다.<br/>
>##### 10 자동 자료형 변환<br/>
- 자바스크립트는 일부 자료형을 상황에 따라 자동으로 변환한다.<br/>
>##### 10.1 숫자와 문자열 자료형 자동 변환<br/>
- 숫자와 문자열에 '+' 연산자를 적용하면 자동으로 숫자가 문자열로 변환된다.<br/>
>##### 10.2 불 자료형 자동 변환
- 조건문의 조건 표현식에 표현식을 넣을 때와 ! 연산자를 사용할 때는 불 자료형으로 자동 변환된다.<br/>
>##### 11 일치 연산자<br/>
- 자바스크립트에만 있는 특수한 연산자이다.(===, !==)<br/>
>##### 12 상수<br/>
- ECMAScript6부터는 const 상수 생성 키워드가 추가되었다. const는 상수를 만드는 키워드이고, 상수는 항상 같은 수 라는 의미로 변수와 반대되는 개념이다.<br/>
- 상수는 변하지 않는 값에 이름을 붙일 때 사용한다. <br/>
>##### 1 if 조건문<br/>
- 가장 기본적인 조건문이다. 볼 표현식이 true이면 문장을 실행한다.<br/>
>##### 2 if else 조건문<br/>
- 자바스크립트는 두 가지로 분명하게 나뉘는 상황에서 편리하게 사용할 수 있는 if else 조건문을 제공한다.<br/>
>##### 3 중첩 조건문<br/>
- 조건문 안에 조건문을 중첩해 사용하는 것을 말한다.<br/>
## [03월 16일]
>##### 자바 스크립트는 부수적인 프로그래밍 언어로 가장 오해를 많이 받았다.<br/>
- 개발자들이 자바스크립트를 무시했지만 자바스크립트 덕분에 인터넷 속도가 빨라지면서 더 많은 콘텐츠를 제공할 수 있게 되자 다양한 곳에 활용하기 시작했다. 그 예로는 구글 지도가 있으며, 자바스크립만 사용하여 기존의 지도보다 훨씬 강격한 지도를 제공했다.
이때 풍부한 경험을 선사하는 웹 애플리케이션이라는 뜻의 RIA가 나왔다.
자바스크립트의 속도가 빨라지자 자바스크립트를 웹 브라우저가 아닌 곳에서도 사용할 수 있게 표준을 만들자는 의견이 많아졌고 CommonJS 표준 발표 이후 라이언 달은 CommonJS표준과 V8 자바스크립트 엔진을 기반으로 Node.js를 개발했다.
Node.js는 이벤트 기반 비동기 방식으로 작동하기에 대규모 네트워크 애플리케이션을 개발하는데 적합하다.<br/>
- 이벤트 기반은 처리의 흐름이 순차적으로 진행되는 동기방식과 달리 처리의 흐름이 섞이는 비동기 방식 이다.
명절 재래시장에서 장보는것으로 예를 들면 동기 방식은 순차적으로 각 가게에서 대기하며 장을보고 비동기 방식은 몸을 4개로 나누어(미리 예약하여 부름받기)달려가는 것으로 비동기 방식이 효율적인것을 알 수 있다. <br/>
- 이런 비동기 방식을 프로그래밍 언어에서는 스레드라고 한다. <br/>
- node.js는 모든 모듈이 처음부터 비동기 기반의 프로그램을 만들 수 있도록 설계되어 초보자도 쉽게 프로그램을 만들 수 있다.<br/>
- 자바스크립트로 할 수 있는 일<br/>
    - 웹 클라이언트 애플리케이션 개발<br/>
    - 웹 서버 개발<br/>
    - 모바일 애플리케이션 개발<br/>
    - 데스크톱 애플리케이션 개발<br/>
    - 게임 개발<br/>
    - 데이터베이스 관리<br/>
- 실습 환경 구축<br/>
    - Atom 에디터 설치<br/>
    - Node.js 설치<br/>
    - 크롬 설치<br/>
- 기본 실습 방법<br/>
    - 파일 생성<br/>
    - 명령 프롬포트<br/>
    - 파일 실행<br/>
- REPL<br/>
- 웹 브라우저 실습 방법<br/>
    - 파일 생성과 실행<br/>
    - 오류 확인 방법
(ctrl+shift+i)<br/>
- 기본 용어<br/>
>##### 1.1표현식과 문장<br/>
- 표현식:값을 만들어 내는 간단한 코드<br/>
(273<br/>
10+20+30+2<br/>
"javaScript Prongramming")<br/>
- 문장:표현식이 하나 이상 모일 경우, 마지막에 종결 의미로 세미콜론(;)<br/>
- 프로그램: 문장이 모이면 프로그램이 됨<br/>
(273;<br/>
10+20+30+2;<br/>
let name = "윤"+"인"+"성"<br/>
console.log("Hello World...!")
)<br/>
>##### 1.2키워드<br/>
- 특별한 의미가 부여된 단어로 자바스크립트를 처음 만들 때 정했다. 자바스크립트는 발전하면서 키워드를 계속 추가했다.<br/>
>##### 1.3식별자<br/>
- 이름을 붙일 때 사용하는 단어이다. 변수와 함수 이름 등으로 사용된다.<br/>
1.키워드를 사용하면 안 된다.<br/>
2.특수 문자는 _와 $만 허용된다. <br/>
3.숫자로 시작하면 안 된다.<br/>
4.공백은 입력하면 안 된다.<br/>
- 식별자 사용 규칙<br/>
1.생성자 함수의 이름은 항상 대문자로 시작한다.<br/>
2.변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작한다.<br/>
3.여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 합니다.<br/>
>##### 1.4주석<br/>
- 프로그램의 진행에 전혀 영향을 주지 않는 코드로 프로그램을 설명할 때 사용한다. <br/>
>##### 2출력<br/>
>##### 2.1출력 메소드<br/>
- 자바스크립트의 가장 기본적인 출력 방법은 console 객체의 log() 메소드를 사용하는 것이다.<br/>
- 메소드는 console.log("문자열")처럼 메소드의 괄호 안에 문자열 또는 다양한 자료형을 입력해서 사용한다.<br/>
>##### 2.2REPL을 사용한 출력<br/>
- console.log() 메소드를 사용해야 문자열을 출력할 수 있습니다. 간단한 덧셈 확인 결과 등을 살펴볼 때 파일을 만들어 코드를 입력하고 실행하는것이 귀찮을때 REPL에 곧바로 문장을 입력해서 출력을 확인할 수 있다.<br/>
>##### 3기본 자료형<br/>
- 프로그래밍 언어는 자료를 손쉽게 다루려고 만들었다. 어떤 프로그래밍 언어를 공부하든 해당 프로그래밍 언어에서 사용하는 자료형을 먼저 알아보아야 한다.<br/>
>##### 3.1숫자<br/>
- 가장 기본적인 자료형은 숫자이다. <br/>
(숫자 생성<br/>
console.log(52)<br/>
console.log(52.271)<br/>
)<br/>
>##### 3.2문자열<br/>
- 문자의 집합을 문자열이라고 하지만 한 문자로 구성된 것도 문자열로 취급한다.<br/>
- 기본 문자열을 생성할 때 큰따옴표나 작은따옴표를 사용한다.<br/> 
- 이스케이프 문자는 특수한 기능을 수행하는 문자를 의미한다.

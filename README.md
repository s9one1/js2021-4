# 김민정 [202030302]

## [목차]
<details>
<summary>목차</summary>
<div markdown="1">

#### [1. 03월 16일](#03월-16일)
<details>
<summary>0316</summary>
<div markdown="1">
- 자바 스크립트 설명<br>
- 표현식과 문장<br>
- 키워드<br>
- 식별자<br>
- 출력<br>
- 기본 자료형<br>
- 숫자<br>
- 문자열<br>
</div>
</details>


#### [2. 03월 23일](#03월-23일)
<details>
<summary>0323</summary>
<div markdown="1">
- 불<br>
- 변수<br>
- 복합 대입 연산자<br>
- 증감 연산자<br>
- 자료형 검사<br>
- undefined 자료형<br>
- 강제 자료형 변환<br>
- Number() 함수와 nan<br>
- Boolean() 함수<br>
- 자동 자료형 변환<br>
- 숫자와 문자열 자료형 자동 변환<br>
- 불 자료형 자동 변환<br>
- 일치 연산자<br>
- 상수<br>
- if 조건문<br>
- 중첩 조건문<br>
</div>
</details>

#### [3. 03월 30일](#03월-30일)
<details>
<summary>0330</summary>
<div markdown="1">
- if else if 조건문<br>
- switch 조건문<br>
- 삼항 연산자<br>
- 짧은 초기화 조건문<br>
- 조금 더 나아가기<br>
- 배열<br>
- while 반복문<br>
- for 반복문<br>
</div>
</details>

#### [4. 04월 06일](#04월-06일)
<details>
<summary>0406</summary>
<div markdown="1">
- 역 for 반복문<br>
- for in 반복문과 for of 반복문<br>
- 중첩 반복문<br>
- break 키워드<br>
- continue 키워드<br>
- 스코프<br>
- 호이스팅<br>
- var키워드<br>
</div>
</details>

#### [5. 04월 13일](#04월-13일)
<details>
<summary>0413</summary>
<div markdown="1">
- 함수 생성 방법<br>
- 익명 함수<br>
- note_리터럴<br>
- 선언적 함수<br>
- 화살표 함수<br>
- 함수의 기본 활용 형태<br>
- 함수 매개 변수 초기화<br>
- 콜백 함수<br>
- 표준 내장 함수<br>
- 숫자 변환 함수<br>
- 타이머 함수<br>
</div>
</details>

#### [6. 04월 27일](#04월-27일)
<details>
<summary>0427</summary>
<div markdown="1">
- 익명 함수와 선언적 함수의 생성 순서<br>
- 익명 함수와 화살표 함수의 차이<br>
- 객체 기본<br>
</div>
</details>

#### [7. 05월 04일](#05월-04일)
<details>
<summary>0504</summary>
<div markdown="1">
- 객체와 반복문<br>
- 속성과 메소드<br>
- 생성자 함수<br>
- 프로토 타입<br>
- 조금 더 나아가기<br> 
- 기본 자료형과 객체 자료형의 차이<br>
- Number 객체<br>
- 메소드<br>
- 생성자 함수의 속성<br>
- String 객체<br>
- 속성과 메소드<br>
- 메소드 활용<br>
</div>
</details>

#### [8. 05월 11일](#05월-11일)
<details>
<summary>0511</summary>
<div markdown="1">
- Date객체<br>
- 메소드 활용<br>
- Array 객체<br>
- 프로토타입에 메소드 추가<br>
- underscore.js 라이브러리<br>
- JSON 객체<br>
- 예외와 기본 예외 처리<br>
- 예외 객체<br>
- 예외 강제 발생<br>
</div>
</details>

#### [9. 05월 18일](#05월-18일)
<details>
<summary>0518</summary>
<div markdown="1">
- 전역 변수<br>
- process 객체의 속성과 이벤트<br>
- process 객체와 이벤트 개요<br>
- os 모듈<br>
- url 모듈<br>
- File System 모듈<br>
- 파일 읽기<br>
- 비동기 처리의 장점<br>
- 파일 쓰기<br>
- 파일 처리와 예외 처리<br>
- 노드 패키지 매니저<br>
- request 모듈<br>
- cheerio 모듈<br>
- async 모듈<br>
</div>
</details>

#### [10. 05월 25일](#05월-25일)
<details>
<summary>0518</summary>
<div markdown="1">
- 요청과 응답<br>
- express 모듈을 사용한 서버 생성과 실행<br>
- 페이지 라우팅<br>
- response 객체<br>
- request 객체<br>
- 미들웨어<br>
- 정적 파일 제공<br>
- morgan 미들웨어<br>
- body-parser 미들웨어<br>
</div>
</details>

</div>
</details>

## [05월 25일]
>### 요청과 응답
- 웹 서버가 하는 일은 요청과 응답의 연속이라고 정의할 수 있다.
- 웹 브라우저에 웹 피이지 주소를 입력하면 웹 서버는 입력한 주소에 맞는 웹 페이지를 제공한다.
- 요청하는 대상을 클라이언트, 응답하는 대상을 서버, 클라이언트가 서버로 보내는 편지를 요청 메시지, 서버가 클라이언트로 보내는 편지를 응답 메시지라고한다.
- 웹은 클라이언트가 서버에 HTML 페이지나 파일을 요청하면 서버가 그 요청에 응답해 요청한 HTML 문서나 파일을 클라이언트에 제공하는 장소이다.
>### express 모듈을 사용한 서버 생성과 실행
- express 모듈을 사용해 서버를 생성할 때는 express(), app.use(), app.listen()의 메소드를 사용한다.

express 모듈로 서버 생성과 실행
```
const express = require('express');
const app = express();
app.use((request, response) => {
    response.send('<h1>Hello express</h1>');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>### 페이지 라우팅
- 클라이언트 요청에 적절한 페이지를 제공하는 기술이다.
- 페이지 라우팅을 할 때는 토큰을 활용할 수 있다.
    - 토근은 ':<토큰 이름>' 형태로 설정한다.
    - 토큰은 다른 문자열로 변환해서 입력할 수 있다.
    - request 객체의params 속성으로 전달된다.

페이지 라우팅
```
const express = require('express');
const app = express();
app.get('/page/:id', (request, response) => {
    const id = request.params.id;
    response.send(`<h1>${id} Page</h1>`);
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>### response 객체
- response 객체는 send(), status(), set() 처럼 여러가지 메소드가 있다.
>###### 데이터 제공
- 지금까지는 send() 메소드를 사용해 사용자에게 데이터 본문을 제공했다.
    - send() 메소드를 가장 마지막에 실행해야 하며, 두 번 실행할 수 없다.

response 객체의 기본 메소드
```
const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCD');
    response.set({
        'methodB1': 'FGHIJ',
        'methodB2': 'KLMON'
    });
    response.send('본문을 입력합니다.');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>###### Contest-Type
- 서버가 Contest-Type을 제공해 주면 웹 브라우저는 헤더를 확인하고, 제공된 데이터의 형태를 확인한다.
    - 이때 형태를 MIME라는 문자열로 제공한다.

그림과 음악 파일 제공
```
const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
app.get('/image', (request, response) => {
    fs.readFile('abc.jpg', (error, data) => {
        response.type('image/jpg');
        response.send(data);
    });
    
});

app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        response.type('audio/mpeg');
        response.send(data);
    });
});

app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>###### HTTP 상태 코드
- 404 Not Found 같은 숫자를 HTTP 상태 코드라고 한다.
- 상태 코드는 서버가 클라이언트에 해당 경로는 이러한 상태라고 알려 주는 용도이다.
상태 코드를 지정할 때는 status() 메소드를 사용한다.

상태 코드
```
const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.status(404);
    response.send('없음');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>###### 리다이렉트
- 3xx는 리다이렉트라고 하는 특수한 상태 코드이다.
- 웹 브라우저가 리다이렉터를 확인하면 화면을 출력하지 않고, 응답 헤더는 Location 속성을 확인해서 해당 위치로 이동한다.

리다이렉트
```
const express = require('express');
const app = express();
app.get('*', (request, response) => {
    response.redirect('http://naver.com');
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>### request 객체
- 제대로된 응답을 하려면 무엇을 요청했는지를 확실하게 알아야 한다.
>###### 요청 매개 변수
- 요청 매개 변수를 추출할 때는 query 객체를 사용한다.
- 요청 매개 변수는 URL 뒤에 ? 기호를 삽입하고, <키>=<값>형태로 값을 &로 구분해서 입력한다.

요청 매개 변수 추출
```
const express = require('express');
const app = express();
app.get('*', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>### 미들웨어
- 코드를 조합하면 원하는 형태의 모든 서버를 만들어 낼 수 있는데, 자주 사용하는 내용중에 복잡하게 구현해야 하는 것을 express모듈이 쉽게 활용할 수 있도록 제공한 기능을 미들웨어라고 한다.
>### 정적 파일 제공
- 웹 페이지에서 변경되지 않는 요소를 쉽게 제공해주는 기능이다.

정적 파일 제공
```
const express = require('express');
const app = express();
app.use(express.static('pub'));
app.get('*', (request, response) => {
    response.send(404);
    response.send("파일 없음");
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
>### morgan 미들웨어
- express 모듈의 미들웨어로 사용할 수 있는 외부 모듈을 확인할 수 있다.
- 이 중에서 비교적 사용이 간단한 morgan 미들웨어는 로그 출력 미들웨어이다.
    - 로그는 관련된 정보를 가진 글자를 의미한다.

morgan 미들웨어
```
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

app.get('*', (request, response) => {
    
    response.send("명령 프롬포트 확인");
});
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
```
## [05월 18일]
>### 전역 변수
- 자바스크립트에서 아무런 변수를 선언하지 않고 모든 곳에서 사용할 수 있는 것들을 전역○○이라고 한다.
- 아무런 제약 없이 사용할 수 있는 것이 변수라면 전역 변수, 함수라면 전역 함수, 객체라면 전역 객체라고 칭한다.
>
|변수|설명|
|:---:|:---:|
|__filename|현재 실행 중인 파일 경로를 나타낸다.|
|__dirname|현재 실행 중인 코드의 폴더 경로를 나타낸다.|
```
console.log(__fillename);
console.log(__dirname);
```
>### process 객체의 속성과 이벤트
- node.js는 process 객체라는 전역 객체를 제공한다.
- process 객체는 프로세스 정보를 제공하며, 제어할 수 있게 하는 객체이다.
```
console.log('- process.env: ', process.env);
console.log('- process.version: ', process.env);
console.log('- process.version: ', process.env);
console.log('- process.arch: ', process.arch);
console.log('- process.platform: ', process.platform);
```
>### process 객체와 이벤트 개요
- 자바스크립트는 이벤트를 많이 활용한다.
    - 서버 자바스크립트와 클라이언트 자바 스크립트에서 많이 사용한다.
```
process.on('exit', () => {
    console.log('프로세스 종료됨');
})

process.on('uncaughtException', () => {
    console.log('예외 발생됨');
})

error.error.error();
```
>### os 모듈
- os 모듈은 애플리케이션을 만들 때 많이 활용하지는 않지만, 모듈의 시본 사용법을 익히기에 가장 적당하다.
```
const foo = require('os');//모듈을 사용할때는 모듈 이름을 사용하는 것이 좋음 하지만 아니어도 됨으로 foo를 씀
console.log(foo.hostname());
console.log(foo.freemem());
console.log(foo.cpus());
```
- require() 함수의 매개 변수로 문자열 os를 입력해 모듈을 추출하고 사용한다는 점을 기억해야 한다.
    - os 모듈 정보를 Node.js 문서에서 찾는다.
>### url 모듈
```
const foo = require('url');
// const parseObject = foo.parse('http://naver.com');
console.log(foo.parse('https://naver.com'));
// console.log(parseObject);
```
>### File System 모듈
- File System 모듈은 const fs = require('fs');를 사용해 추출할 수 있다.
- 파일 이름 수정, 이동, 제거 등 메소드가 많다.
>### 파일 읽기
1. 파일을 읽으려면 파일이 있어야 한다.
2. 실행할 자바 스크립트 파일이 있는 폴더에 textfile.txt 이름의 파일을 생성한다.
3. textfile.txt 파일에는 간단한 문자열 'This is a textfile.txt'를 입력한다.

동기적으로 파일 읽어 들이기
```
const fs = require('fs');
const file = fs.readFileSync('test.txt');
console.log(file);//16진수
console.log(file.toString());
```

비동기적으로 파일 읽어 들이기
```
const fs = require('fs');
fs.readFileSync('textfile.txt', (error, file)=> {
console.log(file);
console.log(file.toString());
```
>### 비동기 처리의 장점
- 순차적으로 읽으 들이는 것이 아니라 병렬적으로 파일을 읽어 들이므로, 파일 하나는 읽어 들이는데 2초씩 걸려도 전체 처리는 2초만 걸린다.
- 6초가 걸리는 처리를 2초로 단축시키는 데 드는 수고로 보면 코드는그리 길지 않다.

여러 파일 동기적으로 읽기
```
const fs = require('fs');
const a = fs.readFileSync('a.txt');
const b = fs.readFileSync('b.txt');
const c = fs.readFileSync('c.txt');
console.log(a,b,c);
```

여러 파일을 비동기적으로 읽기
```
const fs = require('fs');
const async = require('async');
async.parallel([
    (callback) => { fs.readFile('a.txt', callback);},
    (callback) => { fs.readFile('b.txt', callback);},
    (callback) => { fs.readFile('c.txt', callback);},
],(error, results) => {
    console.log(results);
});
```
>### 파일 쓰기
파일 쓰기 메소드
|메소드|설명|
|:---:|:---:|
|fs.writeFileSync(<파일 이름>,<문자열>)|동기적으로 파일을 쓴다.|
|fs.writeFile(<파일 이름>, <문자열>, <콜백 함수>)|비동기적으로 파일을 쓴다.|

동기적으로 파일 쓰기
```
const fs = require('fs');
fs.writeFileSync('test.txt', '안녕!');
console.log('완료');
```

비동기적으로 파일 쓰기
```
const fs = require('fs');
fs.writeFile('test.txt', '잘자', (error) => {
    console.log('완료');
});
```
>### 파일 처리와 예외 처리
- 파일을 처리 할 때는 반드시 예외 처리를 해야 한다.
    - 동기 코드를 예외 처리할 때는 try catch 구문을 활용한다.
    - 비동기 코드를 예외 처리할 때는 콜백 함수로 전달된 첫 번째 매개 변수 error를 활용한다.

동기 코드 예외 처리
```
const fs = require('fs');
try {
    const file = fs.readFileSync('none.txt');
    console.log(file);
    console.log(file.toString());
}catch (exception) {
    console.log('파일을 읽어 들이는데 문자 발생');
    console.log(exception);
}
```
- Node.js에서는 동기 처리를 사용할 이유가 없다.

비동기 코드 예외 처리
```
const fs = require('fs');
fs.readFile('none.txt', (error, file) => {
    if (error) {
        console.log('파일을 읽어 들이는데 문제 발생');
        console.log(error);
    }else {
        console.log(file);
        console.log(file.toString());
    }
});
```
>### 노드 패키지 매니저
- 프로그래밍 플랫폼이 기본적으로 제공하는 모듈을 '내부 모듈'이라고 한다.
- 개인 개발자가 내부 모듈을 조합해 사용하기 쉬운 형태로 만들거나 새로운 기능을 구현해서 제공하는 것을 '외부 모듈'이라고 한다.
    - npm을 외부 모듈을 설치하는 용도로 쓸 수 있다.
    ```
    > npm install <모듈 이름>
    ```
    원하는 버전 설치
    ```
    npm install <모듈 이름>@<버전>
    ```
>### request 모듈
- 웹 요청을 쉽게 만들어 주는 모듈이다.
    - 외부 모듈이므로 npm을 설치해야 사용할 수 있다.
```
> npm install request
```
request 모듈 추출
```
const request = require('request');
```

request 모듈
```
const request = require('request');
const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
    console.log(body);
});
```
- request 모듈로 가져온 웹 페이지는 단순한 HTML 문자열이다.
>### cheerio 모듈
- 가져온 웹 페이지의 특정 위치에서 손쉽게 데이터를 추출한다.

cheerio 모듈 설치
```
> npm install cheerio
```

cheerio 모듈 추출
```
const cheerio = require('cheerio');
```
>### async 모듈
- Node.js의 실행 순서 정의가 어려운것과 들여쓰기가 많은 문제를 해결해 줄 수 있다.

async 모듈 설치
```
> npm install async
```

async 모듈 추출
```
const async = require('async');
```

[목차](#목차)
## [05월 11일]

>#### Date 객체
- Date 객체는 new Date(), new Date(<유닉스 타임>), new Date(<시간 문자열>), new Date(<년>,<월-1>,<일>,<시간>,<분>,<초>,<밀리초>)의 네가지 방식으로 생성된다.
- Month를 나타내는 '월'은 0부터 시작된다.
```
let dateA = new Date();
console.log(dateA);

letdateB = new Date(682281800000);
console.log(dateB);

let dateC = new Date("December 9, 1991 21:30:00");
console.log(dateC);

let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
console.log(dateD);
```
>#### 메소드 활용
- Date 객체는 get○○() 형태의 메소드와 set○○() 형태의 메소드만 가진다.
    - ○○에는 FullYear, Month, Day, Hours, Minutes, Deconds 등이 들어갈 수 있다.

 시간 더하기
```
let date = new Date();
console.log(date);
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 3);
console.log(date); 
```
시간 간격 구하기
```
let now = new Date();
let before = new Date('December 9, 1991');
let interval = new.getTime() - before.getTime();
interval = Math.floor(interval / (1000*60*60*24));
console.log(`태어나고 ${interval}일 지났습니다.`)
```
>#### Array 객체
- Array 객체는 자바스크립트에서 여러 자료를 다룰 때 사용하는 자료형이다.
>#### Array 객체의 기본 메소드
Array 객체의 기본 메소드
```
concat()
join()
pop()
push()
reverse()
slice()
sort()
splice()
```
- Array 객체는 대부분 파괴적 메소드 이므로 자기 자신을 변경한다.
>#### 프로토타입에 메소드 추가
- 프로토타입에 메소드를 추가하면 해당 자료형 전체에 추가할 수 있다.
```
String.prototype.contain = function (input) {
    return this.indexOf(input) >= -1;
};
console.log('안녕하세요'.contain('안녕'));
console.log('안녕하세요'.contain('데굴데굴'));
```
>#### underscore.js 라이브러리
- 자바스크립트에서 괸장히 많은 기본 함수를 제공해도 부족함을 느낀다.
- 그래서 많은 개발자들이 자주 사용하는 기능을 underscore.js 라이브러리에 정리해 두었다.
>#### JSON 객체
- json은 ECMAScript5에서 추가된 객체이다.
- json은 자바스크립트 객체를 사용한 데이터 표현 방법이다.
기본형태
```
let foo = [
    {
        // key: Value,
        name: '고구마',
        price: 1000
    }, 
    {
        name: '감자',
        price: 500
    },
    {
        name: '바나나',
        price: 1500
    },
]; //json 형태
let bar = [
    {
        name: '바나나',
        price: 1500
    }
];
```
제약
```
- 문자열은 큰따옴표로 만들어야 한다.
- 모든 키는 큰따옴표로 감싸야 한다.
- 숫자, 문자열, 불 자료형만 사용할 수 있다.
```
>#### 예외와 기본 예외 처리
- 프로그램을 실행하는 동안 문제가 발생하여 프로그램이 자동 중단되어 발생한 오류를 예외라고 한다.
    - 이러한 오류에 대처할 수 있게 하는 것을 예외 처리라고 한다.
- 예외가 발생하지 않게 사전에 해결하는 것을 예외 처리라고 한다.
기본 예외 처리
```
function callTherrTimes(collback) {
    for (let i=0; i<3; i++) {
        callback();
    }
}
callTherrTimes(function () {console.log('안녕하세요');});
console.log('=========================================')
callTherrTimes();
```
>#### 고급 예외 처리
- 고급 예외 처리는 try 키워드, catch 키워드, finally키워드로 예외를 처리하는 방법이다.
    - 이를 try catch finally 구문이라고 한다.
기본형태
```
try {
    //예외 발생
} catch (exception) {
    //처리
}finally {
    //무조건 실행
}
```
>#### 예외 객체
- 예외가 발생하면 어떤 예외가 발생했는지 정보를 함께 전달받을 수 있게 하는것이 예외 객체이다.
- 예외 객체는 catch 구문의 괄호 안에 들어 있는 변수를 나타낸다.
```
try {

} catch (exception) {

}
```
- 예외 겍체에는 name 속성과 message 속성이 있다.
    - 어떤 예외인지 코드 내부에서 확인 할 수 있다.
>#### 예외 강제 발생
- 예외를 강제로 발생시킬 때는 throw 키워드를 사용한다.
- throw 키워드 뒤에는 문자열 또는 Error 객체를 입력한다.
```
throw '강제 예외';
```

[목차](#목차)
## [05월 04일]

>#### 객체와 반복문
- 생성한 객체에 for in 반복문으로 반복을 적용할 수 있다.
- 객체에 for in 반복문을 적용하면 키가 들어간다.
```
let object = {
    name:'바나나',
    price: 1200
};
for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}
```
>#### 속성과 메소드
- 배열 내부에 있는 값 하나하나를 요소라고 한다.
- 객체 내부에 있는 값 하나하나를 속성이라고 한다.
```
var object = {
    number: 273,
    string: 'RintIanTta',
    boolean: true,
    array: [52,273, 103, 32],
    method: function () {

    }
};
```
- 객체의 속성 중 자료형이 함수인 속성을 메소드라고 한다.
    - object에는 name, price, print 속성이 있고, 이 중에 print속성은 자료형이 함수이므로 print() 메소드라고 한다.
- 객체에 있는 속성을 메소드에서 사용하고 싶을 때는 자신이 가지고 있는 속성임을 표시해야 한다.
    - 자신이 가지고 있는 속성이라는 것을 this 키워드를 사용해 표시한다.

>#### 생성자 함수
- 생성자 함수는 객체를 만드는 함수이다.
- 일반적인 함수와 구분할 수 있게 생성자 함수는 대문자로 시작하는 이름을 사용한다.
```
function Product(name, price) {
    this.name = name;
    this.price = price;
}
```
- 생성자 함수는 new 키워드와 함께 사용해 객체를 생성한다.
```
function Product(name, price) {
    this.name = name;
    this.price = price;
}
let product = new Product("바나나", 1200);
console.log(product);
```
- 객체에는 이름이 있는데 반대로 이름이 없는 객체는 익명 객체라고 한다.
- new 키워드를 사용하지 않으면 일반 함수 호출이 된다.

>#### 프로토타입
- 생성자 함수로 만든 객체는 프로토타입이라는 공간에 메소드를 지정해서 모든 객체가 공유하도록 만들 수 있다.
- 프로토타입은 해당 함수를 생성자 함수로 사용했을 때만 의미가 있다.
>#### 조금 더 나아가기
- null 키워드는 변수처럼 활용할 수 있으며, 아예 값이 없는 상태를 구분할 때 사용한다.
>#### 기본 자료형과 객체 자료형의 차이
- 숫자, 문자열, 불을 기본 자료형이라고 한다.
- 
```
let number = 273;
let string = '안녕하세요';
let boolean = true;
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
```
>#### Number 객체
- Number 객체는 자바스크립트에서 숫자를 표현할 때 사용한다.
```
let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);
```
>#### 메소드
- Number 객체가 가지 메소드의 종류
```
toExponential()-숫자를 지수 표시로 나타낸 문자열을 리턴한다.
toFixed()-숫자를 고정소수점 표시로 나타낸 문자열을 리턴한다.
toPrecision()-숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴한다.
```
- 위에 메소드는 모두 매개 변수로 숫자를 하나 입력받는다.
>#### 생성자 함수의 속성
- 자바스크립트의 함수는 객체의 일종이므로 속성과 메소드를 추가할 수 있다.
- 자바스크립트가 너무 큰 수를 다룰 때는 부동소수점 형식으로 숫자를 다루어 작은 수는 무시한다.
의미 있는 만큼을 더하려면 Infinity를 출력해야한다.
>#### String 객체
- String 객체는 자바스크립트에서 가장 많이 사용하는 내장 객체이다.
```
let stringFromLiteral = '안녕하세요';
let stringFromConstructor = new String('안녕하세요');
```
>#### 속성과 메소드
- String 객체는 length 속성을 가진다.
    - lenth는 문자열의 길이를 나타낸다.
- String 객체의 메소드는 모두 변경된 값을 리턴하는 것이다.
```
let string = 'asdffgh';
string.toUpperCase();
console.log(string);
```
- 자기 자신을 리턴하는 것 뿐이라 소문자 상태로 출력되고, 대문자로 변환하려면 리턴 값을 사용해야 한다.
```
let string = 'asdfghh';
string = string.toUpperCase();
console.log(string);
```
>#### 메소드 활용
- 문자열 내부에 특정 문자열이 있는지 활인할 때는 indexOf() 메소드를 사용한다.
```
let foo = "안녕하세요. 좋은 날씨입니다.";
if(foo.indexOf('아침') >= 0) {
    console.log('좋은 아침입니다.');
}
```

[목차](#목차)
## [04월 27일]
>#### 익명 함수와 선언적 함수의 생성 순서
- 이름이 있다 없다 보다 생성 순서가 더 중요하다.
- 선언적 함수는 코드를 실행하기 전에 생성된다.
- 익명 함수는 선언적 함수를 무조건적으로 덮어쓴다.
- let 키워드를 사용하면 선언적 함수와 동일한 이름의 변수를 생성할 수 없어 순서가 헷갈리는 상황이 발생하지 않도록 억제해 준다.<br>
웹 브라우저에서는 let 키워드를 사용할 수 없어 문제가 발생할 수 있다.

>#### 익명 함수와 화살표 함수의 차이
- 익명함수는 function "() {}" 형태로 선언한다.
- 화살표 함수는 "() => {}" 형태로 선언한다.
- 익명 함수 내부에서 this는 자바스크립트 최상위 객체 또는 외부에서 강제로 연결한 객체를 나타낸다.
- 화살표 함수 내부에서 this는 자기 자신과 관련된 것만을 나타낸다.

>#### 객체 기본
- 객체는 여러 개의 자료형을 한 번에 저장하는 자료형으로 배열과 거의 같다.
- 배열에는 인덱스와 요소가 있으며, 각 배열의 요소를 사용하려면 배열 이름 뒤에 인덱스를 입력해 요소에 접근한다.
- 배열은 객체를 기반으로 만들어 배열과 객체는 상당히 유사하다. 
    - 배열은 요소에 접근할 때 인덱스를 사용하고, 객체는 키를 사용한다.
- 배열은 객체의 요소에 접근하는 방법도 배열과 굉장히 유사하다.
    - 객체 뒤에 대괄호를 사용해 키를 입력하면 객체의 속성에 접근할 수 있다.

[목차](#목차)
## [04월 13일]
>#### 함수 생성 방법
- 자바스크립트에서는 함수를 익명 함수와 선언적 함수 두 가지 방법으로 생성할 수 있다.
>#### 익명 함수
- 함수가 코드의 집합이라는 의미로 중괄호 내부에 코드를 넣으라는 뜻이다.
- 중괄호 내부에 코드를 넣어 코드를 하나의 덩어리로 만들 수 있으며 코드 덩어리는 함수 뒤에 괄호를 붙여 호출한다.
>##### note_리터럴
- 문자의 , 문자에 관한, 사실 그래도인 이라는 뜻이다.
- 변수 안에 들어 있는 상태가 아니라, 문자 그대로 자료를 나타내는 것을 말한다.
>#### 선언적 함수
- 익명 함수와 마찬가지로 충괄호 내부에 코드를 넣는다.
- 코드 덩어리는 함수 뒤에 괄호를 붙여 호출한다.
>#### 화살표 함수[ECMAScript6]
- 익명 함수를 더 간단하게 생성할 수 있다.
- () => {}
>#### 함수의 기본 형태
- 함수는 매개 변수를 여러 개 가질 수도 있다.
>#### 함수의 기본 활용 형태
- 자주 사용하는 기능을 분리하는 것이 메소드의 초점이다.
- 코드를 정리하고 알아보기 쉽게 만드는 목적이 있다.
>#### 함수 매개 변수 초기화
- 자바스크립트는 매개 변수를 입력하지 않아도 함수가 호출된다.
- 매개 변수가 undefined인지 확인하고 undefined일 때 문제가 발생한다면 따로 처리해야 한다.
>#### 콜백 함수
- 자바스크립트는 함수를 변수에 저장할 수 있어 함수의 매개 변수로 전달할 수 있다. 이때 함수의 매개 변수로 전달되는 함수를 콜백 함수라고 한다.
>#### 표준 내장 함수
- 자바스크립트는 기본적으로 필요한 몇 가지 함수를 지원한다.
>#### 숫자 변환 함수
- 문자를 숫자로 변환하는 함수로 parselnt() 함수와 parseFloat() 함수를 제공한다.
- Number() 함수만을 사용해 숫자로 변환할 것을 추천한다.
>#### 타이머 함수
- 특정 시간 후에, 특정 시간마다 어떤 일을 할 때 타이머 함수를 사용한다.

[목차](#목차)
## [04월 06일]
>#### 역 for 반복문
- 배열 반복을 뒤에서부터 실행해야 할 때 사용한다.<br/>
>#### for in 반복문과 for of 반복문
- 객체에 쉽게 반복문을 적용할 때 사용한다.<br/>
>#### 중첩 반복문
- 반복문을 여러 번 중첩해서 사용하는것을 말한다.<br/>
>#### break 키워드
- switch 조건문이나 반복문을 벗어날 때 사용한다.<br/>
- 반복문의 조건이 항상 참이어서 무한 반복 할때 break 키워드를 사용해서 벗어날 수 있다.<br/>
>#### continue 키워드
- 반복문 내부에서 현재 반복을 멈추고 다음 반복을 진행하게 한다.<br/>
- break 와 continue 키워드는 코드를 이리저리 날뛰게 하여 많이 사용하면 코드가 복잡해져 조건을 변경해서 최대한 내용을 줄이는 것이 좋다.<br/>
>#### 스코프
- 변수를 사용할 수 있는 범위를 나타낸다.<br/>
- 블록
    - 스코프==블록 이라고 생각하면 된다.<br/>
    - 자바스크립트의 중괄호로 둘러싸는 부분을 블록이라 한다.<br/>
    - 서로 다른 블록에서 선언하면 오류가 방샐하지 않는다.<br/>
>#### 호이스팅
- 해당 블록에서 사용할 변수를 미리 확인해서 정리하는 작업이다.<br/>
>#### var 키워드
- 자바스크립트에서는 일반적으로 변수를 만들 때 let 키워드를 사용한다.<br/>
    - let 키워드로 생성한 변수는 해당 블록 내부에서만 사용할 수 있다.<br/>
- 인터넷 익스플로러에서는 let 키워드와 const 키워드를 지원하지 않으므로 var 키워드를 사용해야 한다.<br/>
    - var 키워드로 생성한 변수는 모든 곳에서 사용할 수 있다.<br/>
    [목차](#목차)
## [03월 30일]
>#### if else if 조건문<br/>
- 중첩 조건문의 중괄호를 생략했을 때 만든 조건문이다. if else if 조건문은 중복되지 않는 세 가지 이상의 조건을 구분할 때 사용한다.<br/>
>#### switch 조건문<br/>
- break 키워드는 switch 조건문이나 반복문을 빠져나갈 때 사용한다. 조건문의 괄호 안에는 비교할 값을 입력한다. <br/>
>#### 삼항 연산자<br/>
- 연산자이지만 프로그램의 진행을 조건에 따라 변화시킬 수 있다. 코드가 복잡해 보이기 때문에 한 줄로 표시할 수 있을 때만 사용하면 좋다. 자바스크립트에서 삼항 연사자는 해당 변수가 undefined인지 활인할 때 자주 사용한다.<br/>
 (<볼표현식> ? <참> : <거짓>)<br/>
 >#### 짧은 초기화 조건문<br/>
 - ||연산자 <br/>
 - A||B에서 A가 참이라면 A로 대치된다.<br/>
 >#### 조금 더 나아가기<br/>
- Node.js에서 작동하는 자바스크립트는 단순한 코드로 입력을 받을 수 없다. 그 이유는 Node.js의 무언가를 기다리는 느린 코드를 절대 만들지 못하게 하겠다는 사상때문이다. <br/>
>#### 배열<br/>
- 배열은 여러 개의 자료를 한꺼번에 다룰 수 있는 자료형이다. 배열 안에 들어 있는 각 자료를 요소라고 하고, 배열의 요소에 접근할 때는 대괄호를 사용하며, 대괄호 안에 넣는 숫자를 인덱스라고 한다.<br/>
>#### while 반복문<br/>
- 불표현식이 참인 동안에는 중괄호 안의 문장을 계속 실행한다.<br/>
>#### for 반복문 <br/>
- 원하는 횟수만큼 반복하고 싶을 때 사용한다. <br/>
[목차](#목차)
## [03월 23일]
>#### 불<br/>
- 불은 참과 거짓으로 표현할 때 사용한다.<br/>
- 불은 true와 false 두 가지 값만 있다.<br/>
- 자바스크립트는 크기를 비교하는 연산자로 참과 거짓을 만들고, 이러한 연산자를 비교 연산자라고 한다. <br/>
- 비교 연산자를 사용하면 불을 만들 수 있다. 그리고 불끼리는 논리 연산자를 사용할 수 있다. <br/>
(+ !-논리 부정 연산자는 숫자 부호를 반대로 만드는 - 연산자와 같은 형태로 사용한다.<br/>
||-논리합 연산자는 2개의 피연산자 중에 하나만 true이면 전체가 true가 되는 연산자이다. <br/>
&&-논리곱 연산자는 2개의 피연산자 모두 true이어야 전체가 true가 되는 연산자입니다.)<br/>
>#### 변수
- 변수는 값을 저장할 때 사용하는 식별자이다. 모든 자료형을 저장할 수 있다.<br/>
- 변수는 다음 두 단계를 거쳐 사용할 수 있다.<br/>
(1 변수를 선언한다.-변수를 만드는 것을 말한다.<br/>
2 변수에 값을 할당한다.-변수에 값을 저장하는것을 말한다.)<br/>
변수를 초기화한다.-변수를 선언한 후 처음 값을 할당하는 것을 말한다.<br/>
>#### 복합 대입 연산자<br/>
- 복합 대입 연산자는 자료형에 적용하는 기본 연산자와 = 연산자를 함께 사용한다.(a+10)<br/>
(+= - 숫자 덧셈 후 대입 연산자<br/>
-= - 숫자 뺄셈 후 대입 연산자<br/>
*= - 숫자 곱셈 후 대입 연산자<br/>
/= - 숫자 나눗셈 후 대입 연산자<br/>
)<br/>
>#### 증감 연산자<br/>
- 변수에 적용할 수 있는 연산자. 단항 연산자로 변수 앞과 뒤에 ++기호와 --기호를 붙여 만든다.<br/>
(변수++ - 기존 변수 값에 1을 더한다.(후위)<br/>
++변수 - 기존 변수 값에 1을 더한다. (전위)<br/>
변수-- - 기존 변수 값에서 1을 뺀다.(후위)<br/>
--변수 - 기존 변수 값에서 1을 뺀다.(전위))<br/>
>#### 자료형 검사<br/>
- 자바스크립트는 하나의 변수에 여러 자료형을 넣을 수 있다.<br/>
- 원하지 않는 자료형이 변수에 들어갈 수도 있기에 자료형을 검사해야 할 때가 많다.<br/>
- 변수의 자료형을 확인할 때는 typeof 연산자를 사용한다.<br/>
>#### undefined 자료형<br/>
- 초기화되지 않은 것으로 표현하는 자료형이다. undefined 자료형은 변수를 선언했으나 초기화하지 않았을 때 나타난다.<br/>
>#### 강제 자료형 변환<br/>
- 어떤 자료형을 특정 자료형으로 강제 변환하고 싶을 때 함수를 사용한다.<br/>
(Number() - 숫자로 자료형 변환한다.<br/>
String() - 문자열로 자료형 변환한다.<br/>
Boolean() - 불로 자료형 변환한다.)<br/>
>#### Number() 함수와 NaN
- 문자열이나 불을 숫자로 변환할 때 사용하는 함수이다.<br/>
>#### Boolean() 함수
- 자바스크립트에서 Boolean() 함수를 사용하면 0,NaN, ""[빈문자열], null, undefined 5개의 요소는 false로 변환된다.<br/>
>#### 자동 자료형 변환<br/>
- 자바스크립트는 일부 자료형을 상황에 따라 자동으로 변환한다.<br/>
>#### 숫자와 문자열 자료형 자동 변환<br/>
- 숫자와 문자열에 '+' 연산자를 적용하면 자동으로 숫자가 문자열로 변환된다.<br/>
>#### 불 자료형 자동 변환
- 조건문의 조건 표현식에 표현식을 넣을 때와 ! 연산자를 사용할 때는 불 자료형으로 자동 변환된다.<br/>
>#### 일치 연산자<br/>
- 자바스크립트에만 있는 특수한 연산자이다.(===, !==)<br/>
>#### 상수<br/>
- ECMAScript6부터는 const 상수 생성 키워드가 추가되었다. const는 상수를 만드는 키워드이고, 상수는 항상 같은 수 라는 의미로 변수와 반대되는 개념이다.<br/>
- 상수는 변하지 않는 값에 이름을 붙일 때 사용한다. <br/>
>#### if 조건문<br/>
- 가장 기본적인 조건문이다. 볼 표현식이 true이면 문장을 실행한다.<br/>
>#### if else 조건문<br/>
- 자바스크립트는 두 가지로 분명하게 나뉘는 상황에서 편리하게 사용할 수 있는 if else 조건문을 제공한다.<br/>
>#### 중첩 조건문<br/>
- 조건문 안에 조건문을 중첩해 사용하는 것을 말한다.<br/>
[목차](#목차)
## [03월 16일]
>#### 자바 스크립트는 부수적인 프로그래밍 언어로 가장 오해를 많이 받았다.<br/>
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
>#### 표현식과 문장<br/>
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
>#### 키워드<br/>
- 특별한 의미가 부여된 단어로 자바스크립트를 처음 만들 때 정했다. 자바스크립트는 발전하면서 키워드를 계속 추가했다.<br/>
>#### 식별자<br/>
- 이름을 붙일 때 사용하는 단어이다. 변수와 함수 이름 등으로 사용된다.<br/>
1.키워드를 사용하면 안 된다.<br/>
2.특수 문자는 _와 $만 허용된다. <br/>
3.숫자로 시작하면 안 된다.<br/>
4.공백은 입력하면 안 된다.<br/>
- 식별자 사용 규칙<br/>
1.생성자 함수의 이름은 항상 대문자로 시작한다.<br/>
2.변수, 함수, 속성, 메소드의 이름은 항상 소문자로 시작한다.<br/>
3.여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로 합니다.<br/>
>#### 주석<br/>
- 프로그램의 진행에 전혀 영향을 주지 않는 코드로 프로그램을 설명할 때 사용한다. <br/>
>#### 출력<br/>
>#### 출력 메소드<br/>
- 자바스크립트의 가장 기본적인 출력 방법은 console 객체의 log() 메소드를 사용하는 것이다.<br/>
- 메소드는 console.log("문자열")처럼 메소드의 괄호 안에 문자열 또는 다양한 자료형을 입력해서 사용한다.<br/>
>#### REPL을 사용한 출력<br/>
- console.log() 메소드를 사용해야 문자열을 출력할 수 있습니다. 간단한 덧셈 확인 결과 등을 살펴볼 때 파일을 만들어 코드를 입력하고 실행하는것이 귀찮을때 REPL에 곧바로 문장을 입력해서 출력을 확인할 수 있다.<br/>
>#### 기본 자료형<br/>
- 프로그래밍 언어는 자료를 손쉽게 다루려고 만들었다. 어떤 프로그래밍 언어를 공부하든 해당 프로그래밍 언어에서 사용하는 자료형을 먼저 알아보아야 한다.<br/>
>#### 숫자<br/>
- 가장 기본적인 자료형은 숫자이다. <br/>
(숫자 생성<br/>
console.log(52)<br/>
console.log(52.271)<br/>
)<br/>
>#### 문자열<br/>
- 문자의 집합을 문자열이라고 하지만 한 문자로 구성된 것도 문자열로 취급한다.<br/>
- 기본 문자열을 생성할 때 큰따옴표나 작은따옴표를 사용한다.<br/> 
- 이스케이프 문자는 특수한 기능을 수행하는 문자를 의미한다.

[목차](#목차)
//무명함수. ES6이전에 사용
/* let foo = function () {
    console.log("첫줄");
    console.log("둘째줄");
}

let bar = 135;

foo();
console.log(foo);
console.log(bar); */

//선언적 함수
/* function foo () {
    console.log("첫줄");
    console.log("둘째줄");
}

foo();
console.log(foo); */

//화살표 함수. ES6 문법. 
//let foo = () => console.log("첫줄");//한줄일때는 이렇게 써도 됨
    
/* let foo = () => {
    console.log("첫줄");
    console.log("둘째줄");
}

foo();
console.log(foo); */

/* function power(x) {
    return x * x;
}

console.log(power(10));
console.log(power(20));

function foo(x) {
    bar = x * x;
    return bar;
} */

/* function multiply(x,y) {
    return x * y;
}

console.log(multiply(10, 20));
console.log(multiply(20, 6)); */

/* function print(x) {
    console.log(`"${x}"이라고 말했습니다!`);
}

print("안녕하세요"); */

//5-2
/* function sum (min, max) {
    let output = 0;
    for (let i = min; i<= max; i++) {
        output += i;
    }
    return output;
}
console.log(sum(16, 58));

function multiple (min, max) {
    let output = 1;
    for (let i = min; i<= max; i++) {
        output *= i;
    }
    return output;
}
console.log(multiple(1, 10)); */

//code 5-10
/* function print(name, count) {
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과");
//print("사과", 20); */

//예제 5-4
/* function print(name, count) {
    if(!count) {
        count = "수량을 알수 없습니다.";
    }
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과"); */

//예제 5-5
/* function print(name, count) {
    
        count = count|| "미입력";
    console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과"); */

/* function print(name, count=1) {
console.log(`${name}이/가 ${count}개 있습니다.`)
}
print("사과", 10);
print("사과"); //값을 따로 넣기 귀찮고 애매하기 때문에 저 print안에 선언 */

//예제 5-6
/* function callTenTimes(foo) {
    for(let i = 0; i< 10; i++){
        foo();
    }
}
 callTenTimes(function(){
    console.log('함수 호출');
}); */

//5-7
/* let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";
let inputD = "A동입니다.";

console.log(parseInt(inputA));//o
console.log(parseFloat(inputA));//x

console.log(parseInt(inputB));//o
console.log(parseFloat(inputB));//o

console.log(parseInt(inputC));//숫자형태만 반환 (세모)
console.log(parseInt(inputD));//nan 오류남

console.log("Number()함수");
console.log(Number(inputA));
console.log(Number(inputB));
console.log(Number(inputC));
console.log(Number(inputD)); */

//5-8
/* setTimeout(function() {
    console.log("1초가 지났습니다.");
}, 1000);
setInterval(() => {
    console.log("1초마다 호출됩니다.")
}, 1000); */

/* let foo = setInterval(()=> {
    console.log("출력합니다.")
},1000);

setTimeout(function() {
    clearInterval(foo);
}, 3000); */

/* let bar;
bar = 10;
bar = 20;

console.log(bar);

//코드 5-19
let foo;
foo = function () {console.log("첫번째 함수");}
foo = () => {
    console.log("두번째 함수");// 한번이상 선언하면 마지막것만 출력됨
}

foo(); */

//코드 5-20
foo = function () {//변수에다가 출력
    console.log("첫번째 함수");//무명함수
}
function foo () {
    console.log("두번째 함수");//일반함수
}

foo ();
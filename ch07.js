/* let foo = 273;
let bar = true;

Number.prototype.method = function () {
    return "Add Method"
}

console.log(foo.method());
// console.log(bar.method()); */

/* let numberA = Number.MIN_VALUE;
let numberB = Number.MIN_VALUE + -10101; //얼마를 더 더하든 max_value는 max값을 넣기 때문에 오류없음 min은 무한히 작다 더한 값대로 나옴

console.log(numberA);
console.log(numberB); */

/* let foo = "sdfghk";
foo.toUpperCase();
console.log(foo); //소문자로 나옴 */

/* let foo = "sdfkjeh";
let bar = "sdkfjwe";
foo = foo.toUpperCase(); //foo 저장
console.log(foo);
console.log(bar); */

let foo = "안녕하세요. 좋은 날씨입니다.";
if(foo.indexOf('아침') >= 0) {
    console.log('좋은 아침입니다.');
}
else {
    console.log('안녕히 주무세요');
}
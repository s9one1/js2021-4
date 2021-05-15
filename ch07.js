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

/* let foo = "안녕하세요. 좋은 날씨입니다.";
if(foo.indexOf('아침') >= 0) {
    console.log('좋은 아침입니다.');
}
else {
    console.log('안녕히 주무세요');
} */

/* let dateA = new Date();
console.log(dateA.getHours());
console.log(dateA); */
/* 
let date = new Date();

console.log(date);

date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() + 1);
console.log(date); */

/* let now = new Date();
let before = new Date('December 9, 2020');
let interval = now.getTime() - before.getTime();
console.log(interval);
interval = Math.floor(interval / (1000*60*60*24));
console.log(interval); */

/* let foo = [1, 30, 40, 50, 100];
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
]; */

let foo = [1, 30, 40, 50, 100];
// forEach
foo.forEach((item, index) => {
    console.log(`${index} - ${item}`);
});

console.log('=========================');
//map() 별도의 공간에 저장
let bar = foo.map((item, index)=> {
    return item +100;
});
console.log(bar);

console.log('=========================');
//filter()
let foobar = foo.filter((item, index) => {
    return item % 2 != 0; //짝수(==) 홀수(!=) 조건.
});
console.log(foobar);
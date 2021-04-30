let foo = [
    {name: '바나나', price: 1320},
    {name: '사과', price: 1000},
    {name: '딸기', price: 1500},
    {name: '자두', price: 1300},
    {name: '복숭아', price: 1200}
];
function bar (foo) {
    console.log(`${foo.name} : ${foo.price}`)
}

for (let foo1 of foo) {
    bar(foo1);
}

/* let foo = ['사과', '바나나', '딸기'];
let name = 123;
let product = {
    제품명 : '건조 망고',
    유형: '당절임',
    원산지: '필리핀',
    테스트: 1200,
    print: function() {
        let name = 123;
        console.log(`${this.원산지} ${this.유형}`)
    }
}
print1: () =>  {
    let name = 123;
    console.log(`${this.원산지} ${this.유형}`)
}


product.print(); */

/* console.log(product);

console.log(foo[1]);
console.log(product['원산지']); */

/* for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}  */
let foo = [1, 2, "나무", 4, 5.1, 6]

for (let i in foo) {
    console.log(`${i}번째 요소: ${foo[i]}`);
}

for (let item in foo) {
    console.log(item);
    console.log("item");
    console.log('item');
}


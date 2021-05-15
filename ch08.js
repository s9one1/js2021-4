function callTherrTimes(collback) {
    for (let i=0; i<3; i++) {
        callback();
    }
}
callTherrTimes(function () {console.log('안녕하세요');});
console.log('=========================================')
callTherrTimes();

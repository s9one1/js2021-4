/* console.log(__fillename);
console.log(__dirname); */

/* // console.log('- process.env: ', process.env);
console.log('- process.version: ', process.env);
console.log('- process.version: ', process.env);
console.log('- process.arch: ', process.arch);
console.log('- process.platform: ', process.platform); */

/* console.log('- process.exit: ', process.exit(1)); 
console.log('- process.uptime: ', process.uptime());  */
/* 
process.on('exit', () => {
    console.log('프로세스 종료됨');
})

process.on('uncaughtException', () => {
    console.log('예외 발생됨');
})

error.error.error(); */

//p234
/* process.on('uncaughtException', (err) => {
    fs.writeSync(
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`//바꾸기
    );
  }); */
/* 
const foo = require('os');//모듈을 사용할때는 모듈 이름을 사용하는 것이 좋음 하지만 아니어도 됨으로 foo를 씀
console.log(foo.hostname());
console.log(foo.freemem());
console.log(foo.cpus()); */

/* const foo = require('url');
// const parseObject = foo.parse('http://naver.com');
console.log(foo.parse('https://naver.com'));
// console.log(parseObject); */

/* 
const fs = require('fs');
const file = fs.readFileSync('test.txt');
console.log(file);//16진수
console.log(file.toString());//파일을 스트링으로 바꿔줌 */

/* const fs = require('fs');
fs.readFileSync('textfile.txt', (error, file)=> {
console.log(file);
console.log(file.toString());
}); */

/* const fs = require('fs');
fs.writeFileSync('test.txt', '안녕!');
console.log('완료'); */

/* const fs = require('fs');
fs.writeFile('test.txt', '잘자', (error) => {
    console.log('완료');
}); */

/* const request = require('request');
request('htts://naver.com', (error, Response, body) => {
    console.log(body);
}); */

const request = require('request');
const cheerio = require('cheerio');

const url = 'http://naver.com';
request(url,(error, Response, body) => {
    const $ = cheerio.load(body);
    console.log($('strong.new').text());
});//긁어오기


/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/

console.log('안녕하세요.');

console.log('숫자입니다. %d', 10);
console.log('문자열입니다. %s', '안녕');

var person = {
    name: '소녀시대',
    age: 20
};
console.log('자바스크립트 객체입니다. %j', person);

console.dir(person);

console.time('duration_time');

var result = 0; // eslint-disable-line no-unused-vars
for (var i = 0; i < 10000; i++) {
    result += i;
}

console.timeEnd('duration_time');

console.log('파일 이름 : %s', __filename); //전역 변수
console.log('패스 : %s', __dirname);

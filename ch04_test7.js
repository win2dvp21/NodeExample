var fs = require('fs');

fs.writeFile('./output.txt', 'Hello.', function(err) {
    if (err) {
        console.log('에러 발생.');
        console.dir(err);
        return;
    }
    
    console.log('ouput.txt 파일에 데이터 쓰기 완료함.');
});
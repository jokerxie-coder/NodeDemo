

//引入文件模块
var fs = require('fs');


var filename = 'hello.txt';
var fsdir = __dirname+'/'+filename;

fs.readFile(fsdir,'utf-8',function(err,data){

    //如果文件读取有误，抛出错误
    if(err){
        console.log(err);

      
        throw err;
    } 
      
    console.log(data);

});

console.log(__dirname);


var http = require('http');
var fs = require('fs');//引入文件读取模块
var documentRoot = '../caipiao';
//需要访问的文件的存放目录
var server= http.createServer(function(req,res){
    var url = req.url; 
    var file = (documentRoot + url).split('?')[0];
    fs.readFile( file , function(err,data){
        console.log(file)
        if(err){
            fs.readFile("./page/other/err.html", "utf8", function (err, data) {
                if (err) throw err;
                res.end(data);
            })
        }else{
            res.writeHeader(200,{
                // 'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    });
}).listen(8888,'172.16.12.222');
// .listen(8888,'172.16.12.222');
console.log('服务器开启成功');

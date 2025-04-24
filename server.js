import http from 'http';
import fs from 'fs';
import url from 'url';

http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let filename = "." +q.pathname;

    //debug
    console.log({
        "filename": filename,
        "q":q
    })
    fs.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {"content-type": "text/html"});
            return res.end("Page not found");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(8000);
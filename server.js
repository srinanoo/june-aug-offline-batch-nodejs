const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url);
    if(req.url !== "/favicon.ico") {
        console.log(req.url);
        let qry = url.parse(req.url, true).query;
        console.log(qry);
        console.log(qry.crud);
        console.log(qry.id);
        console.log("My First Console output from Node Server");
        if(qry.crud === "view") {
            fs.readFile("./trainees.json", "utf8", (err, data) => {
                if(err) 
                    console.log(err.message);
                else {
                    let result = JSON.parse(data);
                    console.log(result);
                    res.write(data);
                    res.end();
                }
            });
        } else {
            res.write("My First Node Server");
            res.end();
        }
    }
}).listen(4000, () => console.log("Server has started in port 4000"));
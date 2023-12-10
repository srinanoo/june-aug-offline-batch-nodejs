const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url);
    if(req.url !== "/favicon.ico") {
        // console.log(url.parse(req.url));
        // let qry = url.parse(req.url, true).query;
        // console.log(qry);
        // console.log(qry.crud);
        // console.log(qry.id);
        // console.log("My First Console output from Node Server");
        // if(qry.crud === "view") {
        //     fs.readFile("./trainees.json", "utf8", (err, data) => {
        //         if(err) 
        //             console.log(err.message);
        //         else {
        //             let result = JSON.parse(data);
        //             console.log(result);
        //             res.write(data);
        //             res.end();
        //         }
        //     });
        // } else {
        //     res.write("My First Node Server");
        //     res.end();
        // }

        console.log(req.method);

        // to retrieve data from querystring (HTTP GET METHOD)
        // let qry = url.parse(req.url, true).query;
        // console.log(qry);

        // to retrieve data from req/form body (url encoded) (HTTP POST METHOD)
        // let body = "";
        // req.on("data", chunk => {
        //     body += chunk.toString();
        //     console.log(chunk, "chunk");
        // });
        // req.on("end", () => {
        //     console.log(qs.parse(body))
        //     // console.log(body, "body");
        //     let qry = qs.parse(body);
        //     console.log(qry.crud);
        //     console.log(qry.id);
        // });
        
        // to retrieve data from req/form body (JSON)
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
            console.log(chunk, "chunk");
        });
        req.on("end", () => {
            // console.log(qs.parse(body))
            // console.log(body, "body");
            let qry = JSON.parse(body);
            console.log(qry.crud);
            console.log(qry.id);
        });

        res.write("NODE SERVER");
        res.end();
    }
}).listen(4000, () => console.log("Server has started in port 4000"));
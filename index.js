// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//     let filePath = path.join(__dirname, 'public', 
//         req.url === '/' ? 'index.html' : req.url); 

//     let extName = path.extname(filePath);

//     let contentType = 'text/html';

//     switch(extName) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 //Page not found
//                 fs.readFile(path.join(__dirname, 'public', '404.html'),
//                 (err, content) => {
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(content, 'utf8');
//                 })
//             } else {
//                 //Some server error
//                 res.writeHead(500);
//                 res.end(`Server error: ${err.code}`);
//             }
//         } else {
//             //Success 
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content, 'utf8');
//         }
//     })
// })

// server.listen(PORT, () => console.log(`server listening on ${PORT}`));


//Express implementation
const express = require('express');

const PORT = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.get('/contact-me', (req, res) => {
    res.render("contact-me");
})

app.use((req, res, next) => {
    res.status(404).render("404");
})

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
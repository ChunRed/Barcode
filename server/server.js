const express = require("express");
const app = express();
const http = require('http').Server(app);
const engine = require('ejs-locals');
const path = require('path');
const fs = require('fs');

// const https = require('https').Server(
//     {
//         key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//         cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
//     },
//     app
// );




app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('../client'));

app.set('views', path.join(__dirname, '../client'));

// setup express router
app.get('/', function (req, res) {
    res.render('index');
}); 

let PORT = 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
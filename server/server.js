const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({
    path:'./.env'

});

// mysql이랑 연결
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS, 
    database: process.env.DATABASE 
});

db.connect((err)=>{
    if(err){console.log(err);
    } else {
        console.log("MYSQL Connection Success");
    }
});

app.use(cors());

app.use( express.static( path.join(__dirname, '../client/build') ) );

app.get('*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(5000, function () {
  console.log('listening on 5000')
}); 
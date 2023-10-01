var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P@55W0rdAdmin",
    database: "master"
});
con.connect(function(err){
    if(err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection Established');
})
con.end(function(err) { 
});
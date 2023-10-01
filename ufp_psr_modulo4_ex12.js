var fs = require('fs');
 
try{
    // file not presenet
    var data = fs.readFileSync('demo.html');
} catch (err){
    console.log(err);
}
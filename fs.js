var fs = require('fs');


fs.readFile('data/file.txt', function(err, data) {

    if(err) {
        console.log(err.message);
    } else {
        //console.log(  data.toString('ascii') );
        console.log( "Lunghezza file: " + data.length );
        var i = 0;
        for (const value of data.values()) {
            console.log( ++i + " =>" + value);
        }
    }


})
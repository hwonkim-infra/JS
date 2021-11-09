const Connection = require('tedious').Connection;

const config = {
    user: 'DSG\i0204536',
    password: '',
    database: 'Heavy_Spec',
    server: 'I0204536N0520.database.windows.net'
}


var connection = new Connection(config);
connection.on('connect', function (err) {
    // If no error, then good to proceed.
    console.log("Connected");
    executeStatement();
});

connection.connect();

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
    request = new Request("select * FROM Model_Engine_Certi", function (err) {
        if (err) {
            console.log(err);
        }
    });
    connection.execSql(request);
}

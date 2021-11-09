var sql = require('tedious');
var sqlConfig = {
    server: 'I0204536N0520.database.windows.net', //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'DSG\i0204536', //update me
            password: '' //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'Heavy_Spec' //update me
    }
};


connection.on('connect', function (err) {
    // If no error, then good to proceed.
    console.log("Connected");
});

connection.connect();
const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
// const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const indexRoutes = require('./routes/index');
const KTRoutes = require('./routes/KRTAIndex');


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    fs.readFile("data.json", 'utf8', function (err, data) { // json 파일 위치 지정
        var rData = JSON.parse(data);
        console.log(rData);
        console.log(rData.length);
        res.render(__dirname+'/views/index.ejs', {rData});
    });
});

app.post('/KRTApproval', (req, res) => {
    res.render(__dirname+'/views/KR_TApprove.ejs');
})


// app.use('/admin', adminRoutes);
// app.use(indexRoutes);

// app.use(errorController.get404);

app.listen(3000);

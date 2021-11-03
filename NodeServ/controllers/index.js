

app.get('/listUser', function (req, res) {
  fs.readFile( __dirname + "/data.json", 'utf8', function (err, data) { // json 파일 위치 지정
      var rData = JSON.parse(data);
      // console.log(rData);
      res.render(__dirname+'/views/jsonRead.ejs', {rData});
  });
   
});

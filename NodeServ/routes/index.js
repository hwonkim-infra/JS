// const path = require('path');
const express = require('express');
const router = express.Router();

const Data = require('../util/data.json');



router.get('/', (req, res) => {  
  res.render('dashboard', {
    Title: 'Heavy Certification Board',
    path: '/',
    data: Data
  });  
});

router.get('/KRTAIndex', (req, res) => {
  res.render('KRTAIndex', {    
    path: '/',
    Title: 'Korea Type Approval'
  });
});

module.exports = router;

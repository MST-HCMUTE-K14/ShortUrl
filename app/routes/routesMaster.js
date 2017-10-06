const express = require('express'),
router = express.Router(),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
ejs = require('ejs');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var URL = require('../models/urlRef');

router.get('/',(req,res)=>{
    res.json({status: 'home'})
})

module.exports = router;
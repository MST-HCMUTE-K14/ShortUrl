const express = require('express'),
router = express.Router(),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
ejs = require('ejs');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var URL = require('../models/urlRef');

// router.route('/')

router.get('/:url',(req,res)=>{
    URL.findOne({_id: req.params.url},(err,obj)=>{
        res.redirect(obj.originalUrl)
    })
})

router.post('/create/',(req,res)=>{
    var url = req.body.url
    console.log(url)
    var newURL = new URL();
    newURL.originalUrl = url
    newURL.save((err,shortUrl)=>{
        console.log('short link: http://localhost:8080/url/'+shortUrl.id)
        res.json(shortUrl)
    })
})
module.exports = router;
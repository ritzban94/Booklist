const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Book } = require('../models/book.js');
router.get('/', (req,res) => {
    Book.find((err, docs) => {
        if(!err){ 
            res.send(docs);
        }else{ 
            console.log('Error in retriving books: '+JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No matching record for id: '+ req.params.id);
    }
    Book.findById(req.params.id, (err, doc)=>{
        if(!err){ 
            res.send(doc);
        }else{ 
            console.log('Error in retriving books: '+JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/', (req,res) => {
    var nbook = new Book({
        name: req.body.name,
        year: req.body.year,
        author: req.body.author,
        price: req.body.price,
        ISBN: req.body.ISBN
    });
    nbook.save((err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in adding books: '+JSON.stringify(err,undefined,2));
        }
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No matching record for id: '+ req.params.id);
    }
    var ubook = new Book({
        name: req.params.name,
        year: req.params.year,
        author: req.params.author,
        price: req.params.price,
        ISBN: req.params.ISBN
    });
    console.log(ubook);
    Book.findByIdAndUpdate(req.params.id, /*{$set : ubook}*/ ubook, {new : true}, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in updating books: '+JSON.stringify(err,undefined,2));
        }
        console.log(doc);
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No matching record for id: '+ req.params.id);
    }
    Book.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in deleting books: '+JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;
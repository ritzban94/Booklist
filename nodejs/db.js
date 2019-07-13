const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booklist', (err)=>{
    if(!err){
        console.log('MongoDB connection succeeded..');
    }else{
        console.log('Error: '+JSON.stringify(err,undefined,2));
    }
});
module.exports = mongoose;
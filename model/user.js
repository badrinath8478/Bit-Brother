const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    __id : mongoose.Schema.Types.ObjectId,
     name: {type : String, required: true, trim: true, minlength: 3, maxlength: 30, match: /[a-f]*/ },
     userName :{ type : String,required: true, trim: true, unique: true },
     password:{type:String, required: true,minlength:6},
     
   
});



module.exports = mongoose.model('User', userSchema);

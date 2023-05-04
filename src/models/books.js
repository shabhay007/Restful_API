const mongoose = require("mongoose");
const validator = require("validator");

const bookSchema = new mongoose.Schema({
    bookname : {
        type:String,
        required:true,
        minlength:3
    },
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})

// for creating a new collection
const Book = new mongoose.model('Book', bookSchema);

module.exports = Book;
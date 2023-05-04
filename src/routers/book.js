const express = require("express");
const router = new express.Router();
const Book = require("../models/books");



// create the book record
router.post("/books", async(req, res) => {

    try{
        const user = new Book(req, res);
        const createUser = await user.save();
        resstatus(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

// read the data of registered Books
router.get("/books", async(req, res) => {
    try{
        const booksData = await Book.find();
        res.send(booksData);
    }catch(e){
        res.send(e);
    }
})

// get the individual Book data using id
router.get("/books/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const bookData = await Book.findById(_id);
        console.log(bookData);
         
        if(!bookData){
            return res.status(404).send();
        }else{
            res.send(bookData);
        }

    }catch(e){
        res.send(e)
    }
})


// delete the book record by its id
router.delete("/books/:id", async(req, res) => {
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteBook);
    }catch(e){
        res.status(500).send(e);
    }
})


// update the book record by its id
router.patch("/books/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const updateBooks = await Book.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateBooks);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;
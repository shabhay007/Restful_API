const express = require("express");
require("./db/conn");
// const Book = require("./models/books");
const bookRouter = require("./routers/book");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bookRouter);

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


//******** To start the server, please use "npm run dev". ********
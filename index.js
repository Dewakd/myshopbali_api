const express = require("express")
const mongoose = require("mongoose")
const productRouter = require("./routes/product.route")
const userRouter = require("./routes/user.route")
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);


app.get("/", (req, res) => {
    res.send("Testingdd");
});


mongoose.connect("mongodb+srv://dewakd:4nbq1jGxohkSIShz@myshopbalidb.cyteg.mongodb.net/myshopbali?retryWrites=true&w=majority&appName=myshopbaliDB")
.then(() => {
    console.log("Connected to database");
    app.listen(3001, () => {
        console.log("server running on port 3001");
    })
})
.catch((err) => {
    console.log(err);
})
const moongoose = require("mongoose"); 

const productSchema = moongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    category:{
        type: String,
        required: [true, "Product category is required"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    image: {
        type: [String],
        required: [true, "Product image is required"]
    },

});

const Product = moongoose.model("Product", productSchema);
module.exports = Product;
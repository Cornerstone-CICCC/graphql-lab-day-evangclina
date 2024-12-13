import mongoose, { Schema } from "mongoose";

const ProdcutSchema = new Schema ({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
})

export const Product = mongoose.model("Prodcut", ProdcutSchema)
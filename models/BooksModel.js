import mongoose from "mongoose";


const BookModel = new mongoose.Schema({
    title:String,
    author:String,
    published:String
})

export default mongoose.models.Book || mongoose.model("Book", BookModel);

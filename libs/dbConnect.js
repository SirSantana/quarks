import mongoose from "mongoose"


const MONGODB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.exgvi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

async function DBConnect(){
    try {
        await mongoose.connect(MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database conectado');
        
    } catch (error) {
        console.log(error);
    }
}
export default DBConnect

import DBConnect from "../libs/dbConnect"
import BooksModel from "../models/BooksModel"
import userModel from "../models/userModel"


DBConnect()
let data =[
    {
        name:'Miguel',
        email:'salsals',
        ciudad:'Bogota'
    },
    {
        name:'Miguel23',
        email:'weeww',
        ciudad:'Cali'
    },
    {
        name:'Miguel22',
        email:'uyuys',
        ciudad:'Cucuta'
    },
]
export const resolvers = {
    Query:{
        users:async()=>{
            return userModel.find({})
        },
        countUser:()=>userModel.collection.countDocuments(),
        books:async()=>{
            BooksModel.find({})
        }
    },
    Mutation:{
        addBook:(root, args)=>{
            const newBook =  new BooksModel({...args})
            return newBook.save()
        }
    }
}
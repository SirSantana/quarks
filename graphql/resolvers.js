import { UserInputError } from "apollo-server-micro"
import BooksModel from "../models/BooksModel"
import userModel from "../models/userModel"


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
            const users = userModel.find({})
            try {
                await users 
            } catch (error) {
                throw new UserInputError(error.message)
            }
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
import {gql} from 'apollo-server-micro'
import DBConnect from '../libs/dbConnect'


export const typeDefs = gql`
    type User{
        name:String
        email:String
        ciudad:String
        password:String
    }
    type Book{
        title:String
        author:String
        published:String
    }
    type Query{
        users:[User]
        countUser:Int!
        books:[Book]

    }
    type Mutation{
        addBook(title:String author:String published:String):Book
    }
`

export const GETUSERS= gql`
    query{
        users{
            name 
            email
            password
        }
    }
`
import {ApolloServer} from 'apollo-server-micro'
import { resolvers } from '../../graphql/resolvers'
import { typeDefs } from '../../graphql/schema'
import Cors from 'micro-cors'

const cors = Cors()

const corsOptions = {
    origin: "https://quarks-beta.vercel.app/api/graphql",
    credentials: true
  };

const apolloServer = new ApolloServer({typeDefs, resolvers,cors:corsOptions})


const startServer = apolloServer.start()


export default cors(async function handler(req, res){
    if (req.method === 'OPTIONS') {
        res.end();
        return false;
      }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
    );
    res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
    
    await startServer;

    await apolloServer.createHandler({
        path:'/api/graphql'
    })(req, res)

})

export const config={
    api:{
        bodyParser:false
    }
}
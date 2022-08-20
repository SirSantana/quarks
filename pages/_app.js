import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import DBConnect from '../libs/dbConnect'
import '../styles/globals.css'

DBConnect()
function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
      <Component {...pageProps} />

      </ApolloProvider>
  )
}

export default MyApp

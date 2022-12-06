import '../styles/index.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../lib/apollo'

function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )
}

export default MyApp 
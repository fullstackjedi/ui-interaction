import React, { ReactChild } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles'
import '../styles/index.css'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): ReactChild => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App

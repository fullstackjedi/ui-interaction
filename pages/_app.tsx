import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles';
import '../styles/index.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

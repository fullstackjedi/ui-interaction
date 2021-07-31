import React, { ReactChild } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import Head from 'next/head'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Text>Home page</Text>
      <Button>Click Me</Button>
    </Box>
  )
}

export default Home

import React, { ReactChild } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Col1 } from '@components/templates/Col1'
import { Col2 } from '@components/templates/Col2'
import { MotionFlex } from '@components/animation/FramerElements'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Flex h="100vh" justify="center" align="center" bg="#ecebec">
        <Container maxW="120rem">
          <MotionFlex
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            h="70rem">
            <Col1 />

            <Col2 />
          </MotionFlex>
        </Container>
      </Flex>
    </Box>
  )
}

export default Home

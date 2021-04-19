import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <Text>Home page</Text>
      <Button>Click Me</Button>
    </Box>
  );
}

import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const about = () => {
  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} w="700px">
      <Box w={{ base: '100%', md: '50%' }} h="30rem" bg="#f00"></Box>
      <Box w={{ base: '100%', md: '50%' }} h="30rem" bg="#f0f"></Box>
    </Flex>
  )
}

export default about

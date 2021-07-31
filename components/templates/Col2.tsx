import { Flex, Box } from '@chakra-ui/react'
import { Details } from '@components/col2/Details'
import { Menu } from '@components/col2/Menu'
import { Nav } from '@components/col2/Nav'
import { ProductInfo } from '@components/col2/ProductInfo'
import React from 'react'

export const Col2 = () => {
  return (
    <Flex w="50%" h="100%" bg="#f5f4f6" borderTopRightRadius="50px" borderBottomRightRadius="50px">
      <Flex justify="center" align="center" h="100%" flex="1">
        <Box maxW="30rem">
          <Nav />

          <ProductInfo />

          <Details />
        </Box>
      </Flex>

      <Menu />
    </Flex>
  )
}

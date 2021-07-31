import { Heading, Flex, Text } from '@chakra-ui/react'
import { MotionBox } from '@components/animation/FramerElements'
import React from 'react'

export const ProductInfo = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1.1 }}>
      <Text mt="7rem" letterSpacing="3px" fontWeight="600" fontSize="1.2rem">
        ARMCHAIR
      </Text>

      <Heading fontSize="5rem" mt="2rem" fontWeight="400">
        Vedbo - Modernism
      </Heading>

      <Flex align="center" mt="2rem">
        <Text fontSize="2rem" mr="2rem">
          $275.
          <Text as="span" fontSize="1.4rem">
            00
          </Text>
        </Text>
        <Text textDecor="line-through">$299.00</Text>
      </Flex>
    </MotionBox>
  )
}

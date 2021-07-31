import { Flex, Heading, Box, Icon, Image } from '@chakra-ui/react'
import { MotionBox, MotionFlex, MotionImage } from '@components/animation/FramerElements'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

export const Col1 = () => {
  return (
    <Flex
      borderTopLeftRadius="50px"
      borderBottomLeftRadius="50px"
      justify="center"
      align="center"
      w="50%"
      h="100%"
      bg="#ae7575"
      pos="relative">
      <MotionFlex
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        px="5rem"
        justify="space-between"
        w="100%"
        pos="absolute"
        top="5rem">
        <Heading color="#fff">matoa</Heading>

        <Box>
          <Icon mr="1rem" color="#fff" fontSize="2rem" as={AiOutlineShoppingCart} />
          <Icon color="#fff" fontSize="2rem" as={AiOutlineUser} />
        </Box>
      </MotionFlex>

      <MotionImage
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        w="65%"
        src="/images/chair.png"
        zIndex="2"
      />

      <MotionBox
        initial={{ height: 0 }}
        animate={{ height: '55%' }}
        transition={{ delay: 2, duration: 1 }}
        w="100%"
        h="55%"
        borderRadius="50% 50% 0 50px"
        bg="#a57c7c"
        pos="absolute"
        bottom="0"
        zIndex="1"
      />
    </Flex>
  )
}

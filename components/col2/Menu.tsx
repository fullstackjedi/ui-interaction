import { Flex, Icon, Image } from '@chakra-ui/react'
import { MotionFlex } from '@components/animation/FramerElements'
import React from 'react'
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'

export const Menu = () => {
  return (
    <Flex
      borderTopRightRadius="50px"
      borderBottomRightRadius="50px"
      flexDir="column"
      justify="space-between"
      h="100%"
      w="15rem">
      <MotionFlex
        initial={{ height: 0 }}
        animate={{ height: '15rem' }}
        transition={{ delay: 3, duration: 1 }}
        justify="center"
        align="center"
        borderTopRightRadius="50px"
        bg="#ae7575"
        w="100%"
        h="15rem">
        <Icon fontSize="2rem" color="#fff" as={AiOutlineMenu} />
      </MotionFlex>
      <MotionFlex
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        flexDir="column"
        justify="center"
        align="center"
        flex="1"
        bg="#fff">
        <Image src="/images/chair.png" w="40%" mb="2rem" />
        <Image opacity="0.5" src="/images/chair2.png" w="40%" mb="2rem" />
        <Image opacity="0.5" src="/images/chair3.png" w="40%" />
      </MotionFlex>
      <MotionFlex
        initial={{ height: 0 }}
        animate={{ height: '15rem' }}
        transition={{ delay: 3, duration: 1 }}
        justify="center"
        align="center"
        borderBottomRightRadius="50px"
        bg="#ffc142"
        w="100%"
        h="15rem">
        <Icon fontSize="2rem" color="#fff" as={AiOutlinePlus} />
      </MotionFlex>
    </Flex>
  )
}

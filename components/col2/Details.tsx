import { Box, Flex, Text } from '@chakra-ui/react'
import { MotionBox } from '@components/animation/FramerElements'
import React from 'react'

export const Details = () => {
  return (
    <Box mt="5rem">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.1 }}>
        <Text fontWeight="600">Details</Text>
      </MotionBox>

      <Flex mt="2rem">
        <MotionBox
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}>
          <Text fontSize="2rem" mr="2rem">
            75
            <Text as="span" fontSize="1.4rem">
              cm
            </Text>
          </Text>
          <Text>Length</Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1.2 }}>
          <Text fontSize="2rem" mr="2rem">
            55
            <Text as="span" fontSize="1.4rem">
              cm
            </Text>
          </Text>
          <Text>Width</Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1.4 }}>
          <Text fontSize="2rem" mr="2rem">
            35
            <Text as="span" fontSize="1.4rem">
              cm
            </Text>
          </Text>
          <Text>Height</Text>
        </MotionBox>
        <MotionBox
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1.6 }}>
          <Text fontSize="2rem" mr="2rem">
            10
            <Text as="span" fontSize="1.4rem">
              kg
            </Text>
          </Text>
          <Text>Weight</Text>
        </MotionBox>
      </Flex>
    </Box>
  )
}

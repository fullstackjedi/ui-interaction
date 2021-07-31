import { BoxProps, Box, FlexProps, Flex, ImageProps, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionBox = motion<BoxProps | any>(Box)
export const MotionFlex = motion<FlexProps | any>(Flex)
export const MotionImage = motion<ImageProps | any>(Image)

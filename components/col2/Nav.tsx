import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { MotionBox } from '@components/animation/FramerElements'
import React from 'react'

export const Nav = () => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1.1 }}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink fontWeight="600" href="#">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink fontWeight="600" href="#">
            Armchairs
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Vedbo - Modernism</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </MotionBox>
  )
}

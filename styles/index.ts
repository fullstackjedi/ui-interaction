import { buttonStyles, inputStyles, switchStyles } from '@styles/components'
import { colors, textStyles } from '@styles/foundations'

import { extendTheme } from '@chakra-ui/react'
import styles from './global'

export default extendTheme({
  colors,
  textStyles,
  styles,
  components: { Button: buttonStyles, Input: inputStyles, Switch: switchStyles }
})

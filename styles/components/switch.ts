import { mode } from '@chakra-ui/theme-tools'

const parts = ['container', 'track', 'thumb']

function baseStyleTrack(props: Record<string, unknown>) {
  const { colorScheme: c } = props

  return {
    borderRadius: 'full',
    p: '2px',
    width: 'var(--slider-track-width)',
    height: 'var(--slider-track-height)',
    transitionProperty: 'common',
    transitionDuration: 'fast',
    bg: mode('gray.300', 'whiteAlpha.400')(props),
    _focus: {
      boxShadow: 'outline'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed'
    },
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props)
    }
  }
}

const baseStyleThumb = {
  bg: 'white',
  transitionProperty: 'transform',
  transitionDuration: 'normal',
  borderRadius: 'inherit',
  width: 'var(--slider-track-height)',
  height: 'var(--slider-track-height)',
  _checked: {
    transform: 'translateX(var(--slider-thumb-x))'
  }
}

const baseStyle = (props: Record<string, unknown>) => ({
  container: {
    '--slider-track-diff': 'calc(var(--slider-track-width) - var(--slider-track-height))',
    '--slider-thumb-x': 'var(--slider-track-diff)',
    _rtl: {
      '--slider-thumb-x': 'calc(-1 * var(--slider-track-diff))'
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
})

export const switchStyles = {
  parts,
  baseStyle
}

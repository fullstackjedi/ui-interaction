export const buttonStyles = {
  baseStyle: {
    borderRadius: '0.4rem',
    cursor: 'pointer',
    transition: 'all 0.6s',
    _hover: {
      opacity: '0.8',
      transform: 'scale(1.02)'
    },
    _focus: {
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  },
  sizes: {
    lg: {
      fontSize: { base: '1.8rem', lg: '2.4rem' },
      fontWeight: '500',
      px: '3rem',
      py: '1.6rem',
      h: { base: '4.8rem', lg: '6.2rem' }
    },
    md: {
      fontSize: { base: '1.4rem', lg: '1.5rem' },
      fontWeight: '500',
      px: '3rem',
      py: '1.2rem',
      h: { base: '4.3rem' }
    },
    sm: {
      fontSize: { base: '1.2rem', lg: '1.2rem' },
      fontWeight: '600',
      px: '2rem',
      py: '0.8rem',
      h: { base: '3.2rem' }
    }
  },
  variants: {
    transparent: {
      bg: 'transparent'
    },
    dark: {
      bg: 'transparent'
    },
    orange: {
      bg: 'brand.orange',
      color: 'brand.white',
      _hover: {
        _disabled: {
          bg: 'brand.orange'
        }
      }
    }
  }
}

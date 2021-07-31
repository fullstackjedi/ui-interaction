const inputBaseField = {
  border: 'none !important',
  backgroundColor: 'brand.grey',
  width: '100%',
  padding: '2.7rem 2.4rem',
  fontSize: '1.6rem !important',
  color: '#41546c',
  _placeholder: {
    fontSize: '1.3rem',
    color: '#41546c',
    fontWeight: '500'
  },
  _hover: {
    border: 'none',
    boxShadow: 'none',
    outline: 'none'
  },
  _focus: {
    border: 'none',
    boxShadow: 'none',
    outline: 'none'
  }
}

export const inputStyles = {
  baseStyle: {
    field: inputBaseField
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
      fontSize: { base: '1.3rem', lg: '1.6rem' },
      fontWeight: '500',
      px: '3rem',
      py: '2.5rem'
    }
  },
  variants: {
    message: {
      border: 'none',
      height: '100%'
    }
  },
  defaultProps: {
    variant: 'message'
  }
}

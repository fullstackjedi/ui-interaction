// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

import colors from './foundations/colors';
import { fonts } from './foundations/fonts';
import Button from './components/buttons';
import styles from './global';

const theme = extendTheme({ colors, fonts, styles, components: { Button } });

export default theme;

import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const Checkbox = defineMultiStyleConfig({
  variants: {
    primary: {
      control: {
        rounded: 'full',
      },
      label: {
        fontWeight: 'bold',
      },
    },
  },
  sizes: {
    xl: definePartsStyle({
      control: defineStyle({
        boxSize: 6,
      }),
      label: defineStyle({
        fontSize: 'xl',
        marginLeft: 4,
      }),
    }),
  },
});

const Button = defineStyleConfig({
  variants: {
    outline: {
      rounded: '40',
      p: '32px',
      shadow: 'xl',
    },
    danger: {
      color: 'white',
      bg: 'red.500',
    },
  },
});

const colors = {
  navy: '#15202B',
  main: {
    gray: '#D9D9D9',
  },
  blackScheme: {
    100: '#000',
    200: '#000',
    300: '#000',
    400: '#000',
    500: '#000',
    600: '#000',
    700: '#000',
    800: '#000',
    900: '#000',
  },
};

const theme = extendTheme({
  colors,
  components: {
    Button,
    Checkbox,
  },
});

export default theme;

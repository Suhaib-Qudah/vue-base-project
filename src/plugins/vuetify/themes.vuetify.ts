import { ThemeDefinition } from 'vuetify';

export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
};

const ThemeConfigVuetify = {
  defaultTheme: 'mainTheme',
  variations: {
    colors: ['primary', 'secondary'],
    lighten: 6,
    darken: 2,
  },
  themes: {
    mainTheme,
  },
};

export default ThemeConfigVuetify;

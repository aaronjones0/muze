import { withThemeByClassName } from '@storybook/addon-styling';
import '../src/app/globals.css'; // replace with the name of your tailwind css file
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  // Adds theme switching support.
  // NOTE: requires setting "darkMode" to "class" in your tailwind config
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

import './styles.css';
import { themeDark, themeLight } from './themes';

export const parameters = {
  darkMode: {
    darkClass: 'dark-mode',
    lightClass: 'light-mode',
    stylePreview: true,
    classTarget: 'html',
    dark: themeDark,
    light: themeLight,
  },
};

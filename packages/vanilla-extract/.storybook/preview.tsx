import { themeClass } from '../src/theme/theme.css';
import '../src/theme/global.css';
import { themeDark, themeLight } from './themes';

export const parameters = {
  darkMode: {
    dark: themeDark,
    light: themeLight,
  },
};

export const decorators = [
  (Story) => (
    <div className={themeClass}>
      <Story />
    </div>
  ),
];

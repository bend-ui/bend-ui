import { themeClass } from '../src/theme/theme.css';
import '../src/theme/global.css';

export const decorators = [
  (Story) => (
    <div className={themeClass}>
      <Story />
    </div>
  ),
];
